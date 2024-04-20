import mongoose from "mongoose";

const dataSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    tag: {
        type: String,
    },
    color: {
        type: String,
    },
    criteria: {
    }
});

const Data = mongoose.model('data', dataSchema);
export{Data};