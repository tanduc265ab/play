import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "./entity/User";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.DB_HOST || "localhost",
  port: +(process.env.DB_PORT || 3306),
  username: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "test",
  entities: [User],
  synchronize: true,
  logging: false,
});

export const initializeDatabase = async () => {
  try {
    await AppDataSource.initialize();
    console.log("Database connected");
  } catch (err) {
    console.error("Database connection failed", err);
    throw err;
  }
};
