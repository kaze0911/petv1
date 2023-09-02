import mongoose from 'mongoose';

const spaSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
        
    },
    number:{
        type:Number,
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


//用這個模式傳入Spa
const Spa = mongoose.model('Spa', spaSchema);
//傳出
export default Spa