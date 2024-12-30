import "dotenv/config";
import { z } from "zod";

const envSchema = z.object({
    PORT: z.preprocess(
        (x) => +(x as string),
        z.number({
            required_error: "PORT must be present in environment variables",
            invalid_type_error: "Invalid PORT in environment variables",
        })
    ),
    LOG_DIR: z.string({
        required_error: "LOG_DIR must be present in environment variable",
    }),
    JWT_ACCESS_TOKEN_EXPIRED: z.string({
        required_error:
            "JWT_ACCESS_TOKEN_EXPIRED must be present in environment variable",
    }),
    JWT_REFRESH_TOKEN_EXPIRED: z.string({
        required_error:
            "JWT_REFRESH_TOKEN_EXPIRED must be present in environment variable",
    }),
    API_VERSION: z.string({
        required_error: "API_VERSION must be present in environment variable",
    }),
    NODE_ENV: z.string({
        required_error: "NODE_ENV must be present in environment variable",
    }),
    DATABASE_NAME: z.string({
        required_error: "DATABASE_NAME must be present in environment variable",
    }),
    DATABASE_HOST: z.string({
        required_error: "DATABASE_HOST must be present in environment variable",
    }),
    DATABASE_USERNAME: z.string({
        required_error:
            "DATABASE_USERNAME must be present in environment variable",
    }),
    DATABASE_PASSWORD: z.string({
        required_error:
            "DATABASE_PASSWORD must be present in environment variable",
    }),
    DATABASE_PORT: z.preprocess(
        (x) => +(x as string),
        z.number({
            required_error:
                "DATABASE_PORT must be present in environment variables",
            invalid_type_error:
                "Invalid DATABASE_PORT in environment variables",
        })
    ),
});

const env = Object.freeze(envSchema.parse(process.env));
export default env;
