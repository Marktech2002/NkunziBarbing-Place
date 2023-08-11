import { Request , Response } from "express";
import { UserModel } from "../models/userModel";
import { SubscriptionModel } from "../models/subscriptionModel";

/**
 * Create a subscription 
 * @desc  new subscription
   @access Private
 * @param response (Paysatck)
 * @param res 
 * @returns Response
 */
export const subscribeUser = async (res : Response , response : any) => {
    // userId , plan , status , reference
    const Iemail = response.data.customer.email;
    const updateRef = response.data.reference;
    const planCode = response.data.plan_object.plan_code;
    const user = await UserModel.findOne({ email: Iemail });
    console.log(user);
    if (user) {
      // *  new subscription
      const newSubscription = new SubscriptionModel({
        userId: user._id,
        plan: planCode,
        status: "active",
        reference: updateRef,
      });
      await newSubscription.save();
      console.log("new user",newSubscription)
      return res.status(201).json({
        success: true,
        message: "Subscription created succesfully",
        data: newSubscription,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "User Email Not found ",
        status: "Invalid",
      });
    } 
}