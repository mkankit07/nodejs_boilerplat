import bodyParser from "body-parser";
import express, { Application } from "express";
import cors from "cors";
import helmet from "helmet";
import sqlize from "./configs/db";
import logger from "./configs/logger";
import baseRoutes from "./routes";
class Server {
    private app: Application;

    constructor() {
        this.app = express();
        this.config();
        this.dbConnect();
        this.routerConfig();
    }

    private config(): void {
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json({ limit: "1mb" }));
        this.app.use(cors({ origin: "*" }));
        this.app.use(helmet());
    }

    private dbConnect() {
        sqlize
            .authenticate()
            .then(() => {
                logger.info("🚀 Database connected 🚀");
            })
            .catch((err) => {
                logger.error("Database connection failed :: ", err);
            });
    }
    private routerConfig(): void {
        this.app.use("/v1", baseRoutes)
    }

    public start = (port: number) => {
        return new Promise((resolve, reject) => {
            this.app
                .listen(port, () => {
                    resolve(port);
                })
                .on("error", (err) => {
                    reject(err);
                });
        });
    };
}

export default Server;
