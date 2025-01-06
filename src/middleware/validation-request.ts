import { NextFunction, Request, Response } from "express";
import { ZodSchema } from "zod";
import { responseBuilder } from "../constants/response";

const validateRequest = () => {
    const validate = async (
        schema: ZodSchema,
        data: any,
        res: Response,
        _req: Request,
        next: NextFunction
    ) => {
        const parsedBody = await schema.safeParseAsync(data);
        if (!parsedBody.success) {
            const response = responseBuilder
                .error(400)
                .message(
                    parsedBody.error.errors[0]
                        ? parsedBody.error.errors[0].message
                        : "Bad Request"
                )
                .metaData()
                .build();
            res.status(response.code).send(response)
            return;
        }
        next();
    };

    const params =
        (schema: ZodSchema) =>
        async (req: Request, res: Response, next: NextFunction) => {
            await validate(schema, req.params, res, req, next);
        };

    const body =
        (schema: ZodSchema) =>
        async (req: Request, res: Response, next: NextFunction) => {
            await validate(schema, req.body, res, req, next);
        };

    const query =
        (schema: ZodSchema) =>
        async (req: Request, res: Response, next: NextFunction) => {
            await validate(schema, req.query, res, req, next);
        };

    return { params, body, query };
};

export default validateRequest();
