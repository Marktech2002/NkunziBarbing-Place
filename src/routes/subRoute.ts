import express, { Router } from "express";
import {
  createSubscription,
  verifyPayment,
  allSubscriptions,
  getSubscriptionsById,
  deleteSubscription,
} from "../controllers/subController";
import { protectUser, adminAuthorize } from "../middlewares/authMiddleware";

const router: Router = express.Router();
router.post("/create", protectUser, createSubscription);
router.get("/verifypayment", verifyPayment);
router.get("/all", protectUser, adminAuthorize, allSubscriptions);
router.get(
  "/:subscriptionId",
  protectUser,
  adminAuthorize,
  getSubscriptionsById
);
router.post("/disable", protectUser, adminAuthorize, deleteSubscription);

export default router;
