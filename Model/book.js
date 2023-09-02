import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,   
        required: true
    },
    date:{
        type: Date,
        required: true
    }

});

const Book = mongoose.model('Books',bookSchema)

export default Book