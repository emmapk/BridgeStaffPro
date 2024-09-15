import mongoose from "mongoose";

export const userSchema = new mongoose.Schema({
    foodDeduction: {
        type: Number,
    },
    phoneDeduction: {
        type: Number,
    },
    wrongDeduction: {
        type: Number,
    },
    drinkingOnDuty: {
        type: Number,
    },
    barDeduction: {
        type: Number,
    },
    availableSalaryBalance: {
        type: Number,
    },
    datecreateAT: {
        type: Date,
        default: Date.now, 
    },
});

export const userManagement = mongoose.model("userManagement", userSchema);

export { userManagement };
