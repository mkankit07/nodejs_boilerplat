import { Router } from "express";
import { ENDPOINT } from "../constants";
import roleRoutes from "../module/roles/role-routes";

const baseRoutes = Router()

baseRoutes.use(ENDPOINT.ROLES, roleRoutes)

export default baseRoutes;