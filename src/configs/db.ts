import { Sequelize } from "sequelize";
import logger from "./logger";
import env from "./env";

const sqlize = new Sequelize({
    dialect: "postgres",
    username: env.DATABASE_USERNAME,
    password: env.DATABASE_PASSWORD,
    host: env.DATABASE_HOST,
    port: env.DATABASE_PORT,
    database: env.DATABASE_NAME,
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000,
    },
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
        },
    },
});

(async () => {
    try {
        await sqlize.sync({ alter: true, logging: false });
        logger.info("🚀 Tables created successfully. 🚀 ");
    } catch (error) {
        logger.error("Error creating tables:", error);
    }
})();

export default sqlize;
