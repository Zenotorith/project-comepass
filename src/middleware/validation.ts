import Joi from 'joi';
import { Request, Response, NextFunction } from 'express';
import { Email } from '../util/mail';

class Validation {
    private schema = Joi.object<Email>({
        name: Joi.string().min(5).max(30).empty().required().messages({
            'string.min': 'Name is between 5 and 30 characters.',
            'string.max': 'Name is between 5 and 30 characters.',
            'string.empty': 'Name is required.',
            'any.required': 'Name is required.'
        }),
        phone: Joi.string()
            .length(10)
            .pattern(/^[0-9]+$/)
            .empty()
            .required()
            .messages({
                'string.pattern.base': 'Phone number must be numberic from 0 to 9.',
                'string.length': 'Phone number length must be 10 numbers.',
                'string.empty': 'Phone number is required.',
                'any.required': 'Phone number is required.'
            }),
        email: Joi.string().email({ maxDomainSegments: 15 }).empty().required().messages({
            'string.email': 'Invalid Email.',
            'string.empty': 'Email is required.',
            'any.required': 'Email is required.'
        }),
        description: Joi.string().max(300).empty().required().messages({
            'string.max': 'Description is limit in 300 characters.',
            'string.empty': 'Description is required',
            'any.required': 'Description is required.'
        })
    });

    public requestValidation = (req: Request, res: Response, next: NextFunction) => {
        const { error, value } = this.schema.validate(req.body, { abortEarly: false });
        if (error) {
            return res.status(400).json({
                status: 400,
                error: error.details.map((object) => {
                    return {
                        field: object.path[0],
                        message: object.message
                    };
                })
            });
        }
        return next();
    }
}

export default new Validation();
