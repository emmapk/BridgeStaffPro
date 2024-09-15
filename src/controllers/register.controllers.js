import { asyncHandler } from "../utils/asynHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/staffs.models.js";
import validator from 'validator';

const getAuth = asyncHandler(async (req, res) => {
    return res.status(200).render('auth/register');
});

const registerUser = asyncHandler(async (req, res) => {
    const {
        fullname,
        username,
        email,
        nextofKin,
        stateOfOrigin,
        address,
        phoneNumber,
        accountName,
        accountNumber,
    } = req.body;

    const requiredFields = [
        fullname,
        username,
        email,
        nextofKin,
        stateOfOrigin,
        address,
        phoneNumber,
        accountName,
        accountNumber,
    ];

    if (requiredFields.some(field => !field || field.trim() === "")) {
        throw new ApiError(400, "All fields are required");
    }

    

    if (!validator.isEmail(email)){
        throw new ApiError(400, "Invalid email format")
    }

    if (!validator.isMobilePhone(phoneNumber, 'any')) {
        throw new ApiError(400, "Invalid phone number format");
    }

    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
        throw new ApiError(400, "Username or email already exists");
    }

    const newUser = new User({
        fullname,
        username,
        email,
        nextofKin,
        stateOfOrigin,
        address,
        phoneNumber,
        accountName,
        accountNumber,
    });

    await newUser.save();

    return res.status(201).render("auth/register", { 
        message: "User registered successfully",
        user: newUser,
    });
});

export { getAuth, registerUser };
