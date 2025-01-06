import Role from "../../models/roles";
import { IRole } from "./types/type";

export default class RoleQueries {
    static async saveNewRole(payload: IRole) {
        return await Role.create(payload);
    }

    static async getAllRoles() {
        return await Role.findAll();
    }

    static async getRoleById(roleId: string) {
        return await Role.findOne({where:{id: roleId}});
    }
    static async getRoleBySystemName(systemName: string) {
        return await Role.findOne({where:{systemName}});
    }

    static async updateRole(payload: IRole, id:string) {
        return await Role.update(payload, {where:{id}})
    }
}
