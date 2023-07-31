import express , { Router} from "express";
import { Request , Response } from "express";
import { registerUser , loginUser, getUser } from "../controllers/userController";


const router : Router =  express.Router();
router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/me" , getUser);

export default router ;
