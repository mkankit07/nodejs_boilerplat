import { NextFunction, Request, RequestHandler, Response } from "express";

const asyncHandler: (handler: RequestHandler) => RequestHandler = (handler:any) => {
    return async (req:Request, res:Response, next:NextFunction) => {
        try {
            await handler(req, res, next);
        } catch (error) {
            next(error);
        }
    };
};

export default asyncHandler;