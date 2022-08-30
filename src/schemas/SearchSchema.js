import Joi from "joi"

export const SearchSchema =  Joi.object({
    brand: Joi.string()
    .min(1)
    .max(256)
    .required(),

    color: Joi.string()
    .min(1)
    .max(256)
    .trim()
    .required(),
    
    year: Joi.string()
    .min(3)
    .max(256)
    .trim()
    .required(),

    minPrice: Joi.number()
    .min(0)
    .max(9999999999999)
    .required(),

    maxPrice: Joi.number()
    .min(0)
    .max(9999999999999)
    .required(),
}).or('brand', 'name', 'color', 'year').with('minPrice', 'maxPrice');
