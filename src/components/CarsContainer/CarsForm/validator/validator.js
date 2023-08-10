import Joi from "joi";

const validator = Joi.object({
    brand: Joi.string().required().max(20).pattern(/^[a-zA-Zа-яА-яёЁіІїЇ]{1,20}$/).messages({
        "string.empty": "Field is required",
        "string.max": "Max length 20",
        "string.pattern.base": "Allow cyrillic and latin alphabets"
}),
    price: Joi.number().integer().required().min(0).max(1000000).messages({
        "number.integer": 'Value must be an integer',
        "number.base": "Field is required",
        "number.min": "Min value is 0",
        "number.max": "Max value is 1000000",
    }),
    year: Joi.number().integer().required().min(1990).max(new Date().getFullYear()).messages({
        "number.integer": 'Value must be an integer',
        "number.base": "Field is required",
        "number.min": "Min value is 1990",
        "number.max": `Max value is ${new Date().getFullYear()}`,
    }),
})

export {validator}