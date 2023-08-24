import Joi from 'joi';

export const appointmentValidationSchema = Joi.object({
  appointmentDate: Joi.string()
    .regex(/^\w+\s\d{1,2},\s\d{4}\s\d{2}:\d{2}:\d{2}$/)
    .required()
    .error((errors : any) => {
      return errors.map((error: { type: any; }) => {
        switch (error.type) {
          case 'string.regex.base':
            return {
              message: 'Invalid appointment date format. Please use "Month DD, YYYY HH:mm:ss" format.',
            };
          default:
            return error;
        }
      });
    }),
    desc : Joi.string().required()
});
