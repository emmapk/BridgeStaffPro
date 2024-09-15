import { asyncHandler } from "../utils/asncyhandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.models.js";
import { ApiResponse } from "../utils/ApiResponse.js";



const registerUser = asyncHandler( async (req, res) => {
 const  {fullname, email, password, username} = req.body
})

// validation
if(
    [fullname, username, password, email].some((field) => field.trim() === "" )
) {
    throw new ApiError(400, "All fields are required")
}

const existingUser = await User.findOne({
    $or: [{username}, {email}]
})

if (existingUser) {
    throw new ApiError(409, "username and email already exist")  
}
console.warn(req.files)
const avatarLocalPath = req.files?.avatar?.[0]?.path
const coverImageLocalPath = req.files?.coverImage[0]?.path

if(!avatarLocalPath){
    throw new ApiError(400, "avatar file is missing")   
}

// const  avatar = await upload(avatarLocalPath)
// // const Image = await upload(coverImageLocalPath) 

// let coverImage = ""

// if (coverImageLocalPath) {
//     coverImage = await upload(coverImage)
// }

let avatar;
try {
  const avatar =   await uplaod(avatarLocalPath)
  console.log("uploaded avatar", avatar)
} catch (error) {
    console.log("Error uploading avatar", error)
    throw new ApiError(500, "fail to upload avatar")   

}

let coverImage;
try {
  const coverImage =   await uplaod(coverImageLocalPath)
  console.log("uploaded coverImage", coverImage)
} catch (error) {
    console.log("Error uploading avatar", error)
    throw new ApiError(500, "fail to upload avatar")   

}

 const user = await User.create({
    fullname,
    email,
    password,
    coverImage: coverImage?.url || "",
    avatar: avatar.url,
    username:username.toLowercCase()
})
const createUser = await User.findById(user._id).select(
    "-password -refreshtoken"
)

if (!createUser) {
    throw new ApiError(400, "Something went wrong while register a user")  
} else {
   return res
   .status(200)
   .json(new ApiResponse(200, createUser,
    "User register sucessfull") ) 
}

export {
    registerUser 
} 