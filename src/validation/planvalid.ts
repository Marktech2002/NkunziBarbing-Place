import Joi from "joi";

export const createPlanSchema = Joi.object({
    name : Joi.string().required(),
    interval : Joi.string().required(),
    amount : Joi.number().required()
})