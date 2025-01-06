import { DataTypes, Model } from "sequelize";
import sqlize from "../configs/db";

class User extends Model {
    public id!: string;
    public email!: string;
    public mobile_number!: string;
    public role_id!: string;
    public password!: string;
    public is_active!: boolean;
    public is_deleted!: boolean;
}

User.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            unique: true,
            primaryKey: true,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        mobile_number: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role_id: {
            type: DataTypes.UUID,
            allowNull: false,
            references: "roles",
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
        modelName: "users",
        tableName: "users",
        defaultScope: {
            where: { is_deleted: false },
        },
    }
);

export default User;
