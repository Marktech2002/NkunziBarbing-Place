import { Response, Request } from "express";
import { UserModel } from "../models/userModel";
import { SubscriptionModel } from "../models/subscriptionModel";
import { appointmentModel } from "../models/appointmentModel";
import {
  appointmentMail,
  DynamicEmailOptions,
} from "../helpers/appointmentMail";
/**
 * Create an appointment 
 * @desc new appointment
   @route POST nkunzi/appointment/create
   @access Private
 * @param req 
 * @param res 
 * @returns Response
 */
interface Iapp {
  appointmentDate: string;
  desc: string;
}
export const createAppointment = async (
  req: Request,
  res: Response,
  next: any
) => {
  const { id } = req.body.user;
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "No id in request Body",
      status: "Invalid",
    });
  }
  const { appointmentDate, desc }: Iapp = req.body;
  if (!appointmentDate || !desc) {
    return res.status(400).json({
      success: false,
      message: "No data or desc specified",
      status: "Invalid",
    });
  }
  const user = await UserModel.findById(id);
  if (!user) {
    return res.status(404).json({
      success: false,
      message: "User not found",
      status: "Invalid",
    });
  }
  // convert humann-readable date to Date object
  const parsedDate = new Date(appointmentDate);
  //create appointment
  try {
    const appointment = new appointmentModel({
      userId: id,
      desc,
      appointmentDate: parsedDate,
    });
    await appointment.save();

    const options: DynamicEmailOptions = {
      userEmail: user.email,
      dynamicName: user.firstName,
      dynamicIntro: "An appointment has arrived!🥳🥳",
      date: appointmentDate,
    };
    await appointmentMail(req, res, next, options);
    return res.status(200).json({
      success: true,
      message: "Appointment created successfully and mail sent",
      data: appointment,
    });
  } catch (error) {
    console.error(error);
    next(error);
  }
};

/**
 * Get all appointment 
 * @desc ALL appointment
   @route GET nkunzi/appointment/
   @access Private
 * @param req 
 * @param res 
 * @returns Response
 */
export const getAppointments = async (
  req: Request,
  res: Response,
  next: any
) => {};

/**
 * Delete an appointment
 * @desc delete an appointment
   @route DELETE nkunzi/appointment/
   @access Private
 * @param req 
 * @param res 
 * @returns Response
 */
export const deleteAppointment = async (
  req: Request,
  res: Response,
  next: any
) => {};

/**
 * Reschedule an appointment or Update
 * @desc  update an appointment
   @route PUT nkunzi/appointment/
   @access Private
 * @param req 
 * @param res 
 * @returns Response
 */
export const updateAppointment = async (
  req: Request,
  res: Response,
  next: any
) => {};
