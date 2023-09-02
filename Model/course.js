import mongoose from 'mongoose';

const lessonSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
        
    },
    teacher:{
        type:String,
        required:true
    },
    place:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
    ,
    description:{
        type:String
    }
    ,
    createdAt:{
        type:Date,
        default:Date.now
    }
})


//用這個模式傳入Course
const Course = mongoose.model('Course', lessonSchema);
//傳出
export default Course