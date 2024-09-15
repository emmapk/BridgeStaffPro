import mongoose, { Types } from "mongoose";

export const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 100,
    },
    username : {
        type: String,
        required: true,
        minlength: 2,
        maxlength:100
    },
    address: {
        type: String,
        required: true,
    },
    stateOfOrigin: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    accountName: {
        type: String,
        required: true,
    },
    accountNumber: {
        type: Number,
        required: true,
    },
    phoneNumber: {
        type: Number,
        required: true,
    },
    nextOfKin: {
        type: String,
        required: true,
    },
    dateOfBirthday: {
        type: String,
        required: true,
    },
    coverImage: {
        type: String,
        required: true,
    },
    datecreateAT: {
        type: Date,
        default: Date.now, 
    },
});

const User = mongoose.model("User", userSchema);

export { User };
