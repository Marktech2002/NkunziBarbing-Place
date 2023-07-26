import express , { Router} from "express";
import { Request , Response } from "express";
import { registerUser } from "../controllers/userController";


const router : Router =  express.Router();
router.post("/register", registerUser)
router.post("/login")
router.get("me");

export default router ;
