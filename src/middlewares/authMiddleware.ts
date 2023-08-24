import Jwt from "jsonwebtoken";
import express, { Request, Response, NextFunction } from "express";
import { UserModel } from "../models/userModel";
import { SubscriptionModel } from "../models/subscriptionModel";
import { logger } from "../util/logger";

/**
 * ? Authotization Middlware
 * * @desc Protect Routes
 * * @param req
 * * @param res
 * @param next
 * @returns Response
 */
export const protectUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let token: string | null = null;
  // * check for token
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded: any = Jwt.verify(token, process.env.JWT_SECRET || "");
      req.body.user = decoded;
      //   console.log(req.body.user);
      next();
    } catch (error) {
      logger.error(error);
      return res.status(401).json({
        success: false,
        message: "Not authorized",
        status: "Invalid Request",
      });
    }
    // ? mssing token
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Not authorized , no token",
        status: "Invalid Request",
      });
    }
  }
};

/**
 * ? Authotization admin Middlware
 * * @desc protect Admin Routes
 * * @param req
 * * @param res
 * @param next
 * @returns Response
 */
export const adminAuthorize = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { isAdmin } = req.body.user;
  const user = await UserModel.findById(req.body.user.id);
  try {
    if (user.isAdmin) {
      logger.info("Admin ti wa ");
      next();
    } else {
      return res.status(403).json({
        success: false,
        message: "You are not authorized to access this resource",
      });
    }
  } catch (error) {
    return res.status(403).json({
      success: false,
      message: "Boss you are not permitted",
    });
  }
};

/**
 * ? Protect Appointment route
 * * @desc check subscription status
 * * @param req
 * * @param res
 * @param next
 * @returns Response
 */
export const activeSubscriber = async (
  req: Request,
  res: Response,
  next: any
) => {
  try {
    const user = await UserModel.findById(req.body.user.id);
    if (user) {
      const subscription = await SubscriptionModel.findOne({ userId: user.id });
      if (subscription && subscription.status === "active") {
        next();
      } else {
        return res.status(400).json({
          success: false,
          message: "You dont have an active subscription 😓 ",
        });
      }
    }
  } catch (error) {
    logger.error(error);
    next(error);
  }
};
