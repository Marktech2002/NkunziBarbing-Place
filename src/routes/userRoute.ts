import express, { Router } from "express";
import { Request, Response } from "express";
import {
  registerUser,
  loginUser,
  getUser,
  updateUser,
} from "../controllers/userController";
import { protectUser, adminAuthorize } from "../middlewares/authMiddleware";

const router: Router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/me", protectUser, adminAuthorize, getUser);
router.put("/update/:userId", updateUser);

export default router;
