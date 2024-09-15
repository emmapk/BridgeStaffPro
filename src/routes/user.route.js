import express from "express";
import  {getAuth, registerUser }  from "../controllers/register.controllers.js"; 


const router = express.Router();

router.get("/register", getAuth);
router.post("/register", registerUser)


export default router;
