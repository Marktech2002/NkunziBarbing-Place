import Joi from "joi";

export const deleteSubSchema = Joi.object({
  sub_code: Joi.string().required(),
  emailToken: Joi.string().required(),
});

export const idValidationSchema = Joi.object({
  id: Joi.string()
    .pattern(/^[0-9a-fA-F]{24}$/)
    .required(),
});
