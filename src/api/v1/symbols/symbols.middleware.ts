import Joi from 'joi'
import express from 'express'
function validateInput(schema: Joi.ObjectSchema) {
     return (req: express.Request, res: express.Response, next: express.NextFunction) => {
        const { error } = schema.validate(req.query);
        if (error) {
             return res.status(422).json( {'error': `${error.details.map(x => x.message).join(', ')}` } );
         } 
        next();
     }
     
}

module.exports = {
    validateInput
}