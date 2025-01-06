import { DataTypes, Model } from "sequelize";
import sqlize from "../configs/db";

class UserDetail extends Model {
    public id!: string;
    public user_id!: string;
    public full_name!: string;
    public dob?: string;
    public gender?: string;
    public profile_url?: string;
    public is_deleted!: boolean;
}

UserDetail.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            unique: true,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.UUID,
            allowNull: false,
        },
        full_name: {
            type: DataTypes.STRING,
            allowNull:false
        },
        dob:{
            type:DataTypes.STRING,
            allowNull:true
        },
        gender:{
            type:DataTypes.STRING,
            allowNull:true
        },
        profile_url:{
            type:DataTypes.STRING(1000),
            allowNull:true
        },
        is_deleted:{
            type:DataTypes.BOOLEAN,
            defaultValue:false
        }
    },
    {
        sequelize: sqlize,
        modelName: "user_details",
        tableName: "user_details",
        defaultScope: {
            where: { is_deleted: false },
        },
    }
);
