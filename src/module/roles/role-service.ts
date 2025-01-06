import { MESSAGES } from "../../constants/messages";
import { responseBuilder } from "../../constants/response";
import RoleQueries from "./role-queries";
import { IRole } from "./types/type";

export default class RoleService {

    static async saveNewRole(requestBody: IRole) {
        const role = await RoleQueries.getRoleBySystemName(requestBody.systemName)
        if (role) {
            return responseBuilder.conflictError(MESSAGES.ROLE.ROLE_ALREADY_EXISTS)
        }
        await RoleQueries.saveNewRole(requestBody)
        return responseBuilder.createdSuccess(MESSAGES.ROLE.ROLE_SAVED_SUCCESSFULLY)
    }

    static async getAllRoles() {
        const roles = await RoleQueries.getAllRoles()
        return responseBuilder.okSuccess(MESSAGES.ROLE.ROLES_FETCHED_SUCCESSFULLY, roles)
    }

    static async updateRole(role: string, requestBody:IRole) {
        const updatedRole = await RoleQueries.getRoleById(role)
        if (!updatedRole) {
            return responseBuilder.notFoundError(MESSAGES.ROLE.ROLE_NOT_EXISTS)
        }
        await RoleQueries.updateRole(requestBody, role)
        return responseBuilder.okSuccess(MESSAGES.ROLE.ROLE_SAVED_SUCCESSFULLY)
    }
}
