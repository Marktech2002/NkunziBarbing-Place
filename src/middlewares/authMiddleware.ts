import Jwt from "jsonwebtoken";
import express, { Request, Response, NextFunction } from "express";
import { UserModel } from "../models/userModel";

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
      console.log(error);
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

export const adminAuthorize = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { isAdmin } = req.body.user;
  try {
    if (isAdmin) {
      console.log("Admin ti wa ");
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
