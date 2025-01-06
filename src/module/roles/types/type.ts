import { z } from "zod";
import roleSchema from "../role-schema";

export type IRole = z.infer<typeof roleSchema.createNewRoleSchema>;
