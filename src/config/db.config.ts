import { Sequelize } from "sequelize";

const host: string = "localhost";
const user: string = "root";
const password: string = "";
const dbName: string = "canicatdb";

export default new Sequelize(dbName, user, password, {
  host,
  dialect: "mysql",
});
