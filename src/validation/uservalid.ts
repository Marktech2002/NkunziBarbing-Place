import Joi from "joi";

export const signUpschema = Joi.object({
  email: Joi.string().email().required(),
  firstName: Joi.string().max(20).required(),
  secondName: Joi.string().max(20).required(),
  password: Joi.string().min(6).max(20).required(),
});

export const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().max(6).max(20).required(),
});

export const getUserSchema = Joi.object({
  id: Joi.string(),
});

export const UpdateUserSchema = Joi.object({
  firstName: Joi.string(),
  secondName: Joi.string(),
  email: Joi.string().email(),
});
