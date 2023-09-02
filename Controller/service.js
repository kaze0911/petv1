import Spa from "../Model/spa.js";

export const GetService = (req,res) =>{
    res.render ('service/services');
}

export const GetActivity = (req,res) =>{
    res.render ('service/type/activity');
}

export const GetPhoto = (req,res) =>{
    res.render ('service/type/photo');
}

export const GetSpa = async(req,res) =>{
    const spa = await Spa.find().sort({createdAt: 'desc' })
    res.render ('service/type/spa', {spas : spa});
}

export const GetVet = (req,res) =>{
    res.render ('service/type/vet');
}

export const PostTicket = (req,res) =>{
    res.render ('service/type/vet');
}

export const PostSpa = async(req,res) =>{
    const {name ,number ,price ,place ,description } = req.body
    console.log(req.body);


    const newSpa =  new Spa({
        name: name,
        place: place,
        price : price,
        number: number,
        description: description
    })

    try{
        const saveSpa = await newSpa.save();
        console.log(saveSpa);
        res.redirect(`/services/spa/${newSpa.id}`);
    }catch(error){
        console.log(error)
        res.render('service/type/detail/new',{spa:newSpa})
    }

}

export const GetNew_spa = (req,res) =>{
    res.render('service/type/detail/new/new_spa',{spa: new Spa()})
}

export const GetId_spa = async(req,res) =>{
    const spa = await Spa.findById(req.params.id)
    if(spa == null) res.redirect('/service')
    res.render("service/type/detail/show/show",{service : spa})
}
