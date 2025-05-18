import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
    nombre:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    telefono:{
        type: Number,
        required: true
    },
    mensaje:{
        type: String,
        required: true
    }
});

export default mongoose.model("Post", postSchema);