import { createConnection } from "typeorm";

import appInstance from "./app";

createConnection()
  .then(async (connection) => {
    // start express server
    appInstance.listen(3000);

    console.log(
      "Express server has started on port 3000. Open http://localhost:3000/users to see results"
    );
  })
  .catch((error) => console.log(error));
