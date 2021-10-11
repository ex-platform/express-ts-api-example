import { ConnectionOptions } from "typeorm";

// For mono-repo
// TypeORM cli doesn't support mono-repo
const connection: ConnectionOptions = {
  type: "mariadb",
  host: "localhost",
  port: 3306,
  username: "test",
  password: "test",
  database: "test",
  synchronize: false,
  logging: false,
  entities: ["./src/entity/**/*.ts"],
  migrations: ["./src/migration/**/*.ts"],
  subscribers: ["./src/subscriber/**/*.ts"],
  cli: {
    entitiesDir: "./src/entity",
    migrationsDir: "./src/migration",
    subscribersDir: "./src/subscriber",
  },
};

export default connection
