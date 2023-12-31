import { Response, Request } from "express";
import request from "request";
import { User, UserModel } from "../models/userModel";
import { planModel } from "../models/planModel";
import { subscribeUser } from "../helpers/createsubscription";
import { deleteSubSchema, idValidationSchema } from "../validation/subvalid";
import { logger } from "../util/logger";
import { SubscriptionModel } from "../models/subscriptionModel";

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
  const { email } = user;
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
    logger.error(error);
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
      if (paymentStatus === true) {
        await subscribeUser(res, response);
      }
    });
  } catch (error) {
    logger.error(error);
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
    });
  } catch (error) {
    logger.error(error);
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
  const { error } = idValidationSchema.validate({ Id });
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message.replace(/"|'/g, ""),
      status: "Invalid",
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
    logger.error(error);
    return res.status(500).json({
      success: false,
      message: "An Error Occured",
      status: "Invalid",
    });
  }
};
/**
 * Update subscription
 * @desc   Update a subscription status 
   @route PUT nkunzi/subscription/:subscriptionId
   @access Private
 * @param req 
 * @param res 
 * @returns Response
 */
export const updateSubscriptionStatus = async (
  req: Request,
  res: Response,
  next: any
) => {
  const id = req.params.subscriptionId;
  const { error } = idValidationSchema.validate({ id });
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message.replace(/"|'/g, ""),
      status: "Invalid",
    });
  }
  try {
    const subscription = await SubscriptionModel.findById(id);
    if (subscription) {
      subscription.status = "inactive";
      await subscription.save();
      return res.status(201).json({
        success: true, 
        message: "Subscription updated successfully",
        data: subscription,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Subscription not found",
        status: "Not Found",
      });
    }
  } catch (error) {
    next(error);
    logger.error(error);
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
  const { error } = deleteSubSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message.replace(/"|'/g, ""),
      status: "Invalid",
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
        message: "Subscription Disabled successfully",
        date: response,
      });
    });
  } catch (error) {
    logger.error(error);
    return res.status(500).json({
      success: false,
      message: "An Error Occured",
      status: "Invalid",
    });
  }
};
