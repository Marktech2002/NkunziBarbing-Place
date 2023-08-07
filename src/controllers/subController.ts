import { Response, Request } from "express";
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import request from "request";
import { User, UserModel } from "../models/userModel";
import { planModel } from "../models/planModel";
import { SubscriptionModel } from "../models/subscriptionModel";
import { initializePayment, verifyPayment } from "../services/paymentgateway";
/**
 * Create a subscription
 * @desc new subscription 
   @route POST nkunzi/subscription/create
   @access Private
 * @param req 
 * @param res 
 * @returns Response
 */
export const createSubscription = async (req: Request, res: Response) => {
  const user = await UserModel.findById(req.body.user.id);
  const { id, email } = user;
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
      status: "Invalid",
    });
  }

  const { planId } = req.body;
  if (!planId) {
   return res.status(404).json({
      success: false,
      message: "Provide a planId",
      status: "Missing",
    });
  }
  
   try {
     const validatePlan = await planModel.findOne({ plan_code: planId });
     if (!validatePlan) {
        res.status(404).json({
         success: false,
         message: "Invalid planId or does not exists",
         status: "Invalid",
       });
     }

     const options = {
        url: "https://api.paystack.co/transaction/initialize",
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.SECRET_KEY}`,
          "content-type": "application/json",
          "cache-control": "no-cache",
        },
        form: {
          email: `${user.email}`,
          amount : `${validatePlan.amount}`,
          plan: `${validatePlan.plan_code}`,
        },
      };
      request(options, async function async(error, body) {
        if (error) {
          return res.status(400).json({
            msg: `${error.message}`,
            status: "invalid",
          });
        }
    
        const response = JSON.parse(body.body);
        console.log(response);
        res.json(response)
      });
    //  return res.json(validatePlan)
   } catch (error) {
      console.log(error)
   }

};


  //   initializePayment(credentials , (error : any , body :any) => {
  //     console.log(credentials);
  //     if(error) {
  //         console.log(error)
  //         return res.redirect('/error');
  //     }
  //     const response = JSON.parse(body);
  //     console.log(response )
  //   })
  //   console.log(planId, amount , email)
