import { Sequelize } from "sequelize";

const host: string = "localhost";
const user: string = "root";
const password: string = "#MySQL8:Password*";
const dbName: string = "canicatdb";

const db = new Sequelize(dbName, user, password, {
  host,
  dialect: "mysql",
});

export default db;
