import { Router } from "express";
import { ENDPOINT } from "../../constants";
import asyncHandler from "../../utils";
import RoleHandler from "./role-handler";
import validateRequest from "../../middleware/validation-request";
import roleSchema from "./role-schema";

const roleRoutes = Router();

roleRoutes.post(
    ENDPOINT.BASE,
    [validateRequest.body(roleSchema.createNewRoleSchema)],
    asyncHandler(RoleHandler.saveNewRole)
);

export default roleRoutes;
