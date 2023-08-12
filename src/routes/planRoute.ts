import express, { Router } from "express";
import { createPlan, getPlans } from "../controllers/planController";

const router: Router = express.Router();

router.post("/create", createPlan);
router.get("/", getPlans);
export default router;
