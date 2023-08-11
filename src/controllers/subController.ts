import { Response, Request } from "express";
import Jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import request from "request";
import { User, UserModel } from "../models/userModel";
import { planModel } from "../models/planModel";
import { subscribeUser } from "../helpers/createsubscription";
import { SubscriptionModel } from "../models/subscriptionModel";
import { initializePayment } from "../services/paymentgateway";
/**
 * Create a subscription
 * @desc new subscription 
   @route POST nkunzi/subscription/create
   @access Private
 * @param req 
 * @param res 
 * @returns Response
 */
export const createSubscription = async (
  req: Request,
  res: Response,
  next: any
) => {
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
        email: `${email}`,
        amount: `${validatePlan.amount}`,
        plan: `${validatePlan.plan_code}`,
        callback_url: process.env.CALLBACK_URL,
      },
    };
    request(options, async function async(error, body) {
      if (error) {
        return res.status(400).json({
          success: false,
          msg: `${error.message}`,
          status: "invalid",
        });
      }
      const response = JSON.parse(body.body);
      res.status(200).json(response);
    });
    //  return res.json(validatePlan)
  } catch (error) {
    console.log(error);
    next(error);
  }
};

/**
 * Verify a subscription 
 * @desc  activate user subscriptionns status after verification
   @route GET nkunzi/subscription/verifypayment
   @access Private
 * @param req 
 * @param res 
 * @returns Response
 */
export const verifyPayment = async (req: Request, res: Response, next: any) => {
  const ref = req.query.reference;
  if (!ref) {
    return res.status(404).json({
      success: false,
      message: "Reference Id not found",
      status: "Invalid",
    });
  }

  try {
    const options = {
      url: `https://api.paystack.co/transaction/verify/${ref}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.SECRET_KEY}`,
        "content-type": "application/json",
        "cache-control": "no-cache",
      },
    };
    request(options, async function async(error, body) {
      if (error) {
        return res.status(400).json({
          success: false,
          message: `${error.message}`,
          status: "Invalid",
        });
      }
      const response = JSON.parse(body.body);
      const paymentStatus = response.status;
      // save reference data.customer.email
      console.log(paymentStatus);
      console.log(response.data.customer.email);
      console.log(response.data.reference);
      console.log(response.data.plan_object.plan_code);
      if (paymentStatus === true) {
        await subscribeUser(res, response);
      }
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "An Error Occured",
      status: "Invalid",
    });
  }
};
/**
 * Get all subscriptions 
 * @desc  Fetch subscriptions
   @route GET nkunzi/subscription/all
   @access Private
 * @param req 
 * @param res 
 * @returns Response
 */
export const allSubscriptions = async (
  req: Request,
  res: Response,
  next: any
) => {
  try {
    const options = {
      url: "https://api.paystack.co/subscription",
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.SECRET_KEY}`,
        "content-type": "application/json",
        "cache-control": "no-cache",
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
      res.status(200).json({
        success: true,
        message: "List of all Subscriptions",
        data: response.data,
      });
      //  console.log(response)
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Get subscription by Id
 * @desc  Fetch a subscription
   @route GET nkunzi/subscription/:subscriptionId
   @access Private
 * @param req 
 * @param res 
 * @returns Response
 */
export const getSubscriptionsById = async (req: Request, res: Response) => {
  const Id = req.params.subscriptionId;
  if (!Id) {
    return res.status(404).json({
      success: false,
      message: "Empty Params",
    });
  }
  try {
    const options = {
      url: `https://api.paystack.co/subscription/${Id}`,
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.SECRET_KEY}`,
        "content-type": "application/json",
        "cache-control": "no-cache",
      },
    };
    request(options, async function async(error, body) {
      if (error) {
        return res.status(400).json({
          success: false,
          message: `${error.message}`,
          status: "Invalid",
        });
      }
      const response = JSON.parse(body.body);
      return res.status(200).json({
        success: true,
        message: "Subscription Fetched",
        date: response,
      });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "An Error Occured",
      status: "Invalid",
    });
  }
};

/**
 * Delete a subscription
 * @desc  Delete a subscription
   @route DELETE nkunzi/subscription/:subscriptionId
   @access Private
 * @param req 
 * @param res 
 * @returns Response
 */
export const deleteSubscription = async (req: Request, res: Response) => {
  const { sub_code, emailToken } = req.body;
  if (!sub_code || !emailToken) {
    return res.status(404).json({
      success: false,
      message: "Invalid or missing credentials",
    });
  }
  try {
    const options = {
      url: `https://api.paystack.co/subscription/disable`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.SECRET_KEY}`,
        "content-type": "application/json",
        "cache-control": "no-cache",
      },
      form: {
        code: `${sub_code}`,
        token: `${emailToken}`,
      },
    };
    request(options, async function async(error, body) {
      if (error) {
        return res.status(400).json({
          success: false,
          message: `${error.message}`,
          status: "Invalid",
        });
      }
      const response = JSON.parse(body.body);
      return res.status(200).json({
        success: true,
        message: "Subscription Disabled succefully",
        date: response,
      });
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "An Error Occured",
      status: "Invalid",
    });
  }
};
