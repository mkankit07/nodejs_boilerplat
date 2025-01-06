import { z } from "zod";

const createNewRoleSchema = z
    .object({
        name: z.string({
            invalid_type_error: "Name must be a string",
            required_error: "name is required",
        }),
        systemName: z.string({
            invalid_type_error: "systemName must be a string",
            required_error: "systemName is required",
        }),
    })
    .strict();

const roleSchema = {
    createNewRoleSchema,
};

export default roleSchema;
