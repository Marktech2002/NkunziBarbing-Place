import { Response, Request } from "express";
import { UserModel } from "../models/userModel";
import { appointmentValidationSchema } from "../validation/appointmentvalid";
import { appointmentModel } from "../models/appointmentModel";
import {
  appointmentMail,
  DynamicEmailOptions,
} from "../helpers/appointmentMail";
import { logger } from "../util/logger";

/**
 * Create an appointment 
 * @desc new appointment
   @route POST nkunzi/appointment/create
   @access Private
 * @param req 
 * @param res 
 * @returns Response
 */
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
  const { appointmentDate, desc } = req.body;
   const { error } = appointmentValidationSchema.validate(req.body);
   if (error) {
    return res.status(400).json({
      success: false,
      message: error.details[0].message.replace(/"|'/g, ""),
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
    // Check if the user already has an appointment
    const existingAppointment = await appointmentModel.findOne({ id });
    if (existingAppointment) {
      return res.status(400).json({
        success: false,
        message: "User already has an appointment",
        status: "Invalid",
      });
    }
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
    logger.error(error);
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
) => {
  try {
    const appointment = await appointmentModel.find({}).sort({
      date: -1,
    });
    if (appointment.length === 0) {
      return res.status(404).json({
        success: false,
        message: "Oops no active appointments",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Appointment fetchecd succesfully",
      data: appointment,
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

/**
 * Get an appointment 
 * @desc Fetched by Id appointment
   @route GET nkunzi/appointment/:apppointId
   @access Private
 * @param req 
 * @param res 
 * @returns Response
 */
export const getAppointmentId = async (
  req: Request,
  res: Response,
  next: any
) => {
  const id = req.params.appointmentId;
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "No id in request Body",
      status: "Invalid",
    });
  }

  try {
    const appointment = await appointmentModel.findById(id);
    if (appointment) {
      return res.status(200).json({
        success: true,
        message: "Appointment fetched successfully",
        data: appointment,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Appointment does not exist",
      });
    }
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

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
) => {
  const id = req.params.appointmentId;
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "No id in request parameter",
      status: "Invalid",
    });
  }
  try {
    const appointment = await appointmentModel.findByIdAndDelete(id);
    if (appointment) {
      return res.status(200).json({
        success: true,
        message: "Id successfully deleted",
        data: appointment,
      });
    } else {
      return res.status(404).json({
        success: false,
        message: "Appointment does not exist",
      });
    }
  } catch (error) {
    logger.error(error);
    next(error);
  }
};

interface IAppointment {
  desc?: string;
  appointmentDate?: string;
}
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
) => {
  const { id } = req.body.user;
  const appointmentId = req.params.appointmentId;
  //params id
  if (!id || !appointmentId) {
    return res.status(400).json({
      success: false,
      message: "Missing credentials Id or params",
      status: "Invalid",
    });
  }
  try {
    const { desc, appointmentDate } = req.body;
    const updatedfields: IAppointment = {};
    if (desc) {
      updatedfields.desc = desc;
    }
    if (appointmentDate) {
      updatedfields.appointmentDate = appointmentDate;
    }

    const appointment = await appointmentModel.findOneAndUpdate(
      {
        userId: id,
      },
      updatedfields,
      { new: true }
    );
    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }
    return res.status(200).json({
      success: true,
      message: "Appointment updated successfully",
      data: appointment,
    });
  } catch (error) {
    logger.error(error);
    next(error);
  }
};
