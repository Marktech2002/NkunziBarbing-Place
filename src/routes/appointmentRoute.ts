import express, { Router } from "express";
import {
  createAppointment,
  getAppointments,
  deleteAppointment,
  getAppointmentId,
  updateAppointment,
} from "../controllers/appointmentController";
import {
  protectUser,
  adminAuthorize,
  activeSubscriber,
} from "../middlewares/authMiddleware";

const router: Router = express.Router();

router.post("/create", protectUser, activeSubscriber, createAppointment);
router.get("/all", protectUser, adminAuthorize, getAppointments);
router.get("/:appointmentId", protectUser, adminAuthorize, getAppointmentId);
router.delete(
  "/:appointmentId",
  protectUser,
  adminAuthorize,
  deleteAppointment
);
router.put(
  "/update/:appointmentId",
  protectUser,
  activeSubscriber,
  updateAppointment
);

export default router;
