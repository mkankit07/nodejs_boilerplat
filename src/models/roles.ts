import { DataTypes, Model } from "sequelize";
import sqlize from "../configs/db";

class Role extends Model {
    public id!: string;
    public name!: string;
    public system_name!: string;
    public is_active!: boolean;
    public is_deleted!: boolean;
}

Role.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            unique: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        systemName: {
            type: DataTypes.STRING,
            allowNull: false,
            field:"system_name"
        },
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
            field:"is_active"
        },
        is_deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        sequelize: sqlize,
        modelName: "roles",
        tableName: "roles",
        defaultScope: {
            where: { is_deleted: false },
        },
    }
);

export default Role;
