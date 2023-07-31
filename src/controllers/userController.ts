import { Response, Request } from "express";
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { User, UserModel } from "../models/userModel";
/**
 * Register new user
 * @desc register new user  
   @route POST nkunzi/user/register
   @access Public
 * @param req 
 * @param res 
 * @returns Response
 */

export const registerUser = async (req: Request, res: Response) => {
  const { firstName, secondName, email, password } = req.body;
  if (!firstName || !secondName || !email || !password) {
    res.status(400).json({
      message: "Fill in all fields",
      status: "Invalid",
    });
    if (password < 6) {
      res.status(400).json({
        message: "Password need to be greater than 6",
        status: "Invalid",
      });
    }
  }
  const userExits = await UserModel.findOne({ email });
  if (userExits) {
    res.status(400).json({
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
      res.status(201).json({
        message: "User created successfully",
        _id: user.id,
        name:  `${user.firstName}${user.secondName}`,
        email: user.email,
        token : generateToken(user._id)
      });
    }
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(500).json({
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
  if (!email || !password) {
    res.status(400).json({
      message: "Fill in all credentials",
      status: "Invalid",
    });
  }
  const user = await UserModel.findOne({ email });
  if (user && user.password == password) {
    res.status(200).json({
      _id: user.id,
      name: `${user.firstName} ${user.secondName}`,
      email: user.email,
      password : password ,
      token : generateToken(user._id)
    });
  } else {
    return res.status(400).json({
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
export const getUser =async (req: Request , res : Response) => {
    
}

/**
 *Jwt
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
