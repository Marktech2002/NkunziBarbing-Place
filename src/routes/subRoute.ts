import express , { Router }from "express";
import { createSubscription } from "../controllers/subController";
import { protectUser , adminAuthorize } from "../middlewares/authMiddleware";

const router : Router = express.Router();
router.post("/create" ,protectUser, createSubscription)
router.get("/:subscriptionId")
router.delete("/:subscriptionId")

export default router ;