const Joi = require('joi') 
const schemas = { 
    currencyConvertSchema: Joi.object().keys({
        base: Joi.string().min(3).max(3),
        target: Joi.string().min(3).max(3).required()
    })
}; 
module.exports = schemas