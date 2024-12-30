import env from "./configs/env";
import logger from "./configs/logger";
import server from "./server";

const port = env.PORT || 4000;

const starter = new server()
    .start(port)
    .then((port) => logger.info(`🚀 Server listening on http://localhost:${port} 🚀`))
    .catch((error) => {
        logger.error(error);
    });

export default starter;
