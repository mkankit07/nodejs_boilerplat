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
        system_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        is_active: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
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
