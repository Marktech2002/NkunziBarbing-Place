import { Response, Request } from "express";
import request from "request";
import { planModel } from "../models/planModel";
import { createPlanSchema } from "../validation/planvalid";
import { logger } from "../util/logger";


/**
 * Create a plan
 * @desc new plan
   @route POST nkunzi/plan/create
   @access Private
 * @param req 
 * @param res 
 * @returns Response
 */

export const createPlan = async (req: Request, res: Response, next: any) => {
  const { name, interval, amount } = req.body;
  const { error } = createPlanSchema.validate(req.body);
  if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message.replace(/"|'/g, ""),
      status: "Invalid",
    });
  }
 
  const options = {
    url: "https://api.paystack.co/plan",
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.SECRET_KEY}`,
      "content-type": "application/json",
      "cache-control": "no-cache",
    },
    form: {
      name: `${name}`,
      interval: `${interval}`,
      amount: `${amount}`,
    },
  };
  request(options, async function async(error, body) {
    if (error) {
      res.status(400).json({
        success: false,
        msg: `${error.message}`,
        status: "invalid",
      });
      return;
    }
    const response = JSON.parse(body.body);
    try {
      const newPlan = await planModel.create({
        name: response.data.name,
        amount: response.data.amount,
        interval: response.data.interval,
        plan_code: response.data.plan_code,
        id: response.data.id,
      });
    } catch (error) {
      res.status(400).json({
        success: false,
        message: "Error Creating Plan ",
        status: "Invalid",
      });
      return;
    }
    res.status(201).json({
      success: true,
      message: "Created Successfully",
      data: {
        response,
      },
    });
  });
};

/**
 * list plans
 * @desc Get plans
   @route GET nkunzi/plan
   @access Private
 * @param req 
 * @param res 
 * @returns Response
 */
export const getPlans = async (req: Request, res: Response, next: any) => {
  try {
    const options = {
      url: "https://api.paystack.co/plan",
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
        message: "List of all Plans",
        data: response.data,
      });
    });
  } catch (error) {
    logger.error(error)
    next(error);
  }
};
