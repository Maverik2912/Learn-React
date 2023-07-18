import Joi from "joi";

export const carFormValidator = Joi.object({
    brand: Joi.string().required().regex(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).min(1).max(20).messages({
        'string.empty': 'This field is required',
        'string.pattern.base': 'Apply only eng and uk letters',
        'string.max': 'Max length: 20'
    }),
    price: Joi.number().integer().required().min(0).max(1e6).messages({
        'number.base': 'This field is required',
        'number.integer': 'Apply only integer',
        'number.min': 'Min value: 0',
        'number.max': 'Max value: 1,000,000'
    }),
    year: Joi.number().integer().required().min(1990).max(new Date().getFullYear()).messages({
        'number.base': 'This field is required',
        'number.integer': 'Apply only integer',
        'number.min': 'Min value: 1990',
        'number.max': `Max value: ${new Date().getFullYear()}`
    })
})