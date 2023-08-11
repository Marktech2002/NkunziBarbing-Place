import express, { Router } from "express";
import {
  createAppointment,
  getAppointments,
  deleteAppointment,
  updateAppointment,
} from "../controllers/appointmentController";
import {
  protectUser,
  adminAuthorize,
  activeSubscriber,
} from "../middlewares/authMiddleware";

const router: Router = express.Router();

router.post("/create", protectUser, activeSubscriber, createAppointment);
router.get("/all", getAppointments);
router.delete("/:id", deleteAppointment);
router.put("/update/:id", updateAppointment);

export default router;
