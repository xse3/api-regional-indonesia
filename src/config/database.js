import { Sequelize } from "sequelize";
import {} from "dotenv/config";

const { DB_NAME, DB_PASS, DB_USER, DB_HOST, DB_PORT } = process.env;

export const db = new Sequelize(DB_NAME, DB_USER, DB_PASS, {
  dialect: "mysql",
  logging: false,
  host: DB_HOST,
  port: DB_PORT,
  pool: {
    max: 5,
    min: 0,
    idle: 3000,
  },
});

(async () => {
  try {
    await db.authenticate();
    console.info("Database connected!");
  } catch (error) {
    console.error(`Database not connected! Error:${error.message}`);
  }
})();
