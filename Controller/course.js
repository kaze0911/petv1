import Book from '../Model/book.js';
import Course from '../Model/course.js'



export const GetCourse = async (req,res) =>{
    const courses = await Course.find().sort({createdAt: 'desc' })
    res.render ('course/course', {lessons : courses});
}

export const GetBooking = (req,res) =>{
    res.render ('course/booking');
}

export const GetDetails = (req,res) =>{
    res.render ('course/book/details');
}



export const PostBooking =async (req,res) =>{
    const {name , email, date} = req.body
    console.log(req.body);


    const newBook =  new Book({
        name: name,
        email: email,
        date : date
    })

    try{
        const saveBook = await newBook.save();
        console.log(saveBook);
        res.redirect('/');
    }catch(error){
        console.log(error)
    }
}

export const PostDetails = (req,res) =>{
    res.render ('course/book/details');
}


export const GetNew = (req,res) =>{
    res.render('course/lessons/new',{course : new Course()});
}

export const PostNewLesson = async (req,res) =>{
    const {title, teacher, place, price, description} = req.body
    
    let course = new Course({
        title: title,
        teacher: teacher,
        place: place,
        price: price,
        description: description,
    })

    try {
        const savecourse = await course.save()
        console.log(savecourse);
        res.redirect(`/course/${savecourse.id}`)
    }catch (e) {
        console.log(e);
        res.render('course/lessons/new', {course : course})
    }
    
}

export const GetId = async (req,res) => {
    const course = await Course.findById(req.params.id)
    if (course == null) res.redirect('/course')
    res.render('course/lessons/show',{course: course})
}

