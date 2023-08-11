import { Response, Request } from "express";
import nodemailer from "nodemailer";
import Mailgen from "mailgen";

interface DynamicEmailOptions {
  userEmail: string;
  dynamicName: string;
  dynamicIntro: string;
  date: Date ;
}
/**
 * Send Email
 * @desc Mailing services
   @access Private
 * @param req 
 * @param res 
 * @returns Response
 */
export const sFromGmail = async (
  req: Request,
  res: Response,
  next: any,
  options: DynamicEmailOptions
) => {
  const { userEmail, dynamicName, date } = options;
  let config = {
    service: "gmail",
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    },
  };
  const transporter = nodemailer.createTransport(config);
  const MailGenerator = new Mailgen({
    theme: "default",
    product: {
      name: "Nkunzi Barbing Salon",
      link: "",
    },
  });

  let response = {
    body: {
      name: `Hi ${dynamicName}`,
      intro: `Congratulations! Your registration was successful`,
      action: {
        instructions: `We are thrilled to have on board comrade . GAZA`,
        button: {
          color: "#22BC66", // Optional action button color
          text: "Welcome!!!",
          link: "",
        },
      },
      outro:
        "Thanks for choosing Nkunzi Shop , thrilled to have you once again.",
    },
  };

  const mail = MailGenerator.generate(response);
  const message = {
    from: process.env.EMAIL,
    to: userEmail,
    subject: "Welcome ",
    html: mail,
  };

  transporter
    .sendMail(message)
    .then(() => {
      return res.status(201).json({
        success: true,
        message: "Email Successsfully sent",
      });
    })
    .catch((error) => {
      next(error);
    });
};
