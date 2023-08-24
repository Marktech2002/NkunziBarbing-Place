import { Response, Request } from "express";
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User, UserModel } from "../models/userModel";
import {
  signUpschema,
  loginSchema,
  getUserSchema,
  UpdateUserSchema,
} from "../validation/uservalid";
import { registeredMail, EmailOptions } from "../helpers/registerMail";
import { logger } from "../util/logger";

/**
 * Register new user
 * @desc register new user  
   @route POST nkunzi/user/register
   @access Public
 * @param req 
 * @param res 
 * @returns Response
 */

export const registerUser = async (req: Request, res: Response, next: any) => {
  const { firstName, secondName, email, password } = req.body;
  const { error } = signUpschema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message.replace(/"|'/g, ""),
      status: "Invalid",
    });
  }

  const userExits = await UserModel.findOne({ email });
  if (userExits) {
    return res.status(400).json({
      success: false,
      message: "User Already exists",
      status: "Invalid",
    });
  }

  //hash passwords
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  try {
    const user = await UserModel.create({
      firstName,
      secondName,
      email,
      password: hashedPassword,
    });

    if (user) {
      const options: EmailOptions = {
        userEmail: email,
        dynamicName: firstName,
      };
      await registeredMail(req, res, next, options); // send registration success email
      return res.status(201).json({
        status: true,
        message: "User created successfully",
        _id: user.id,
        name: `${user.firstName} ${user.secondName}`,
        email: user.email,
        token: generateToken(user._id),
      });
    }
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      success: false,
      message: "Failed to create user",
    });
  }
};

/**
 *login new user
 * @desc login  user  
   @route POST /nkunzi/user/login
   @access Public
 * @param req 
 * @param res 
 * @returns Response
 */
export const loginUser = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const { error } = loginSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message.replace(/"|'/g, ""),
      status: "Invalid",
    });
  }
  const user = await UserModel.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    res.status(200).json({
      _id: user.id,
      name: `${user.firstName} ${user.secondName}`,
      email: user.email,
      token: generateToken(user._id),
    });
  } else {
    return res.status(400).json({
      success: false,
      message: "Invalid credentials",
    });
  }
};

/**
 *Get a new user
 * @desc Get user  
   @route POST /nkunzi/user/me
   @access Private 
 * @param req 
 * @param res 
 * @returns Response
 */

export const getUser = async (req: Request, res: Response) => {
  const { id } = req.body.user;
  try {
    const user = await UserModel.findOne({ _id: id });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
        status: "Invalid",
      });
    }
    return res.status(200).json({
      succcess: true,
      message: "User Found",
      user,
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      err: error,
      message: "Server error",
      success: false,
    });
  }
};

/**
 * ? Update user credentials 
 * @desc register new user  
   @route POST nkunzi/user/register
   @access Public
 * @param req 
 * @param res 
 * @returns Response
 */
export const updateUser = async (req: Request, res: Response) => {
  const userId = req.params.userId;
  const { firstName, secondName, email } = req.body;
  const { error } = UpdateUserSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message.replace(/"|'/g, ""),
      status: "Invalid",
    });
  }

  try {
    const existingUser = await UserModel.findById(userId);
    if (!existingUser) {
      return res.status(404).json({
        success: false,
        message: "User not found",
        status: "Invalid",
      });
    }
    if (firstName) {
      existingUser.firstName = firstName;
    }
    if (secondName) {
      existingUser.secondName = secondName;
    }
    if (email) {
      const emailExists = await UserModel.findOne({ email });
      if (emailExists) {
        return res.status(400).json({
          success: false,
          message: "Email already in use",
          status: "Invalid",
        });
      }
      existingUser.email = email;
    }
    const updatedUser = await existingUser.save();
    res.status(200).json({
      success: true,
      message: "User updated succesfully",
      user: updatedUser,
    });
  } catch (error) {
    logger.error(error);
    res.status(500).json({
      success: false,
      message: "Failed to update user",
      status: "Invalid",
    });
  }
};

/**
 *?Jwt
 * @desc  Generate jwt token  
   @access Private
 * @param id : string
 * @returns token : string
 */
const generateToken = (id: string): any => {
  return Jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};
