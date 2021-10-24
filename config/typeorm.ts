import { MysqlConnectionOptions } from "typeorm/driver/mysql/MysqlConnectionOptions";

// Separate settings used in cli and app for mono-repo
const connection: MysqlConnectionOptions = {
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
