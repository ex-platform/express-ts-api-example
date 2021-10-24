import { createConnection } from "typeorm";
import config from "../config";
import application from "./app";

createConnection(config.db)
  .then(async (connection) => {
    application.listen(config.port);

    console.log(`🚀 Express server has started on port ${config.port}`);
    console.log(`Open http://localhost:${config.port} to see results`);
  })
  .catch((error) => console.log(error));
