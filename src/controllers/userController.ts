import { Response, Request } from "express";
import { User, UserModel } from "../models/userModel";
/**
 * Register new user
 * @desc register new user  
   @route POST /user/register
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
  }
  const userExits = await UserModel.findOne({ email });
  if (userExits) {
    res.status(400).json({
      message: "User Already exists",
      status: "Invalid",
    });
  }
 try {
     const user = await UserModel.create({
       firstName ,
       secondName ,
       email ,
       password,
     })
     res.status(200).json({
        message : "User created successfully" ,
        _id : user.id ,
         name : user.firstName + user.secondName ,
         email : user.email ,
        //  token : generateToken()
        
     })
 } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({
        message : "Failed to create user"
    })

 }
};

const generateToken = (id: string) : any => {
      return 
}