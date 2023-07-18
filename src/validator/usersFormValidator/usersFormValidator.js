import Joi from "joi";

export const usersFormValidator = Joi.object({
    name: Joi.string().required().regex(/^[a-zA-Zа-яА-ЯІіЇїЄє\s]+$/).max(50).messages({
        'string.empty': 'This field is required',
        'string.pattern.base': 'Allowed Eng or Uk letters',
        'string.max': 'Max length 50'
    }),
    username: Joi.string().required().regex(/^[\wа-яА-ЯІіЇїЄє0-9-\s]+$/).max(50).messages({
        'string.empty': 'This field is required',
        'string.pattern.base': 'Allowed Eng or Uk letters, digits and -',
        'string.max': 'Max length 50'
    }),
    email: Joi.string().required().regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/).messages({
        'string.empty': 'This field is required',
        'string.pattern.base': 'Invalid email',
    }),
    address: Joi.object().keys({
        city: Joi.string().required().regex(/^[a-zA-Zа-яА-ЯІіЇїЄє\s]+$/).max(50).messages({
            'string.empty': 'This field is required',
            'string.pattern.base': 'Allowed Eng or Uk letters',
            'string.max': 'Max length 50'
        }),
        suite: Joi.string().required().regex(/^[a-zA-Zа-яА-ЯІіЇїЄє\s]+$/).max(50).messages({
            'string.empty': 'This field is required',
            'string.pattern.base': 'Allowed Eng or Uk letters',
            'string.max': 'Max length 50'
        }),
        street: Joi.string().required().regex(/^[a-zA-Zа-яА-ЯІіЇїЄє\s]+$/).max(50).messages({
            'string.empty': 'This field is required',
            'string.pattern.base': 'Allowed Eng or Uk letters',
            'string.max': 'Max length 50'
        }),
        zipcode: Joi.string().required().regex(/^[\d-]{2,10}$/).messages({
            'string.empty': 'This field is required',
            'string.pattern.base': 'Length: from 2 to 10, digits or -',
        }),
        geo: Joi.object().keys({
            lat: Joi.number().required().min(-90).max(90).messages({
                'number.base': 'This field is required',
                'number.min': 'Min value: -90',
                'number.max': 'Max value: 90'
            }),
            lng: Joi.number().required().min(-180).max(180).messages({
                'number.base': 'This field is required',
                'number.min': 'Min value: -180',
                'number.max': 'Max value: 180'
            })
        })
        }),
    phone: Joi.string().required().regex(/^\+?\d{1,3}\s?\(\d{3}\)\s?\d{3}-\d{4}$/).messages({
        'string.empty': 'This field is required',
        'string.pattern.base': 'Invalid phone'
    }),
    website: Joi.string().required().regex(/^(https:\/\/www\.|http:\/\/www\.|https:\/\/|http:\/\/)?[a-zA-Z0-9]{2,}(\.[a-zA-Z0-9]{2,})(\.[a-zA-Z0-9]{2,})?$/).messages({
        'string.empty': 'This field is required',
        'string.pattern.base': 'Invalid URL'
    }),
    company: Joi.object().keys({
        name: Joi.string().required().regex(/^[a-zA-Zа-яА-ЯІіЇїЄє\s]+$/).max(50).messages({
            'string.empty': 'This field is required',
            'string.pattern.base': 'Allowed Eng or Uk letters',
            'string.max': 'Max length 50'
        }),
        catchPhrase: Joi.string().required().regex(/^[a-zA-Zа-яА-ЯІіЇїЄє\s]+$/).max(50).messages({
            'string.empty': 'This field is required',
            'string.pattern.base': 'Allowed Eng or Uk letters',
            'string.max': 'Max length 50'
        }),
        bs: Joi.string().required().regex(/^[a-zA-Zа-яА-ЯІіЇїЄє\s]+$/).max(50).messages({
            'string.empty': 'This field is required',
            'string.pattern.base': 'Allowed Eng or Uk letters',
            'string.max': 'Max length 50'
        })
    })
})

