import Joi from "joi";

export const commentsFormValidator = Joi.object({
    postId: Joi.number()
        .required()
        .min(1)
        .max(100)
        .messages({
            'number.base': 'This field is required',
            'number.min': 'Min value: 1',
            'number.max': 'Max value: 100'
        }),
    name: Joi.string()
        .required()
        .messages({
            'string.empty': 'This field is required'
        }),
    email: Joi.string()
        .required()
        .regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
        .messages({
            'string.empty': 'This field is required',
            'string.pattern.base': 'Invalid email'
        }),
    body: Joi.string().required().messages({
        'string.empty': 'This field is required'
    })
})