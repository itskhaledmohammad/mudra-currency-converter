import express from 'express'
export const catchErrors = (fn: Function) => (req: express.Request, res: express.Response, next: express.NextFunction) => fn(req, res, next).catch(next)

export const developmentErrors = (err:Error, req:express.Request, res: express.Response,
                           next: express.NextFunction) => {
    err.stack = err.stack || '';
    const errorDetails = {
      error: err.message,
      status_code: 500,
    };
    res.status(500).json(errorDetails);
};
