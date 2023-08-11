import { Response, Request } from "express";
import nodemailer from "nodemailer";
import Mailgen from "mailgen";

export interface DynamicEmailOptions {
  userEmail: string;
  dynamicName: string;
  dynamicIntro: string;
  date: string;
}
/**
 * Send Email
 * @desc Mailing services
   @access Private
 * @param req 
 * @param res 
 * @param options 
 * 
 * @returns Response
 */
export const appointmentMail = async (
  req: Request,
  res: Response,
  next: any,
  options: DynamicEmailOptions
) => {
  const { userEmail, dynamicName, dynamicIntro, date } = options;
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
      link: "https://nkunzi.co/",
    },
  });

  let response = {
    body: {
      name: `Hi ${dynamicName}`,
      intro: dynamicIntro,
      action: {
        instructions: ` An appointment was scheduled to hold on ${date} by one of our prestige customer`,
        button: {
          color: "#22BC66", // Optional action button color
          text: "New Appointment",
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
    subject: "New Appointment",
    html: mail,
  };

  transporter
    .sendMail(message)
    .then(() => {
      console.log('Sent successfully');
    })
    .catch((error) => {
     console.error(error)
    });
};
