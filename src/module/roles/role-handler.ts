import { Request,Response } from "express";
import RoleService from "./role-service";

export default class RoleHandler {
    
    static async saveNewRole(req:Request, res:Response) {
        const response = await RoleService.saveNewRole(req.body)
        res.status(response.code).json(response)
    }

    static async getAllRoles(_req:Request, res:Response) {
        const response = await RoleService.getAllRoles()
        res.status(response.code).json(response)
    }

    static async updateRole(req:Request, res:Response) {
        const role = req.params.role as string
        const response = await RoleService.updateRole(role, req.body)
        res.status(response.code).json(response)
    }
}
