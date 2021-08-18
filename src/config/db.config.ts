import { Sequelize } from 'sequelize';

const host = 'localhost';
const user = 'root';
const password = '#MySQL8:Password*';
const dbName = 'canicatdb';

const db = new Sequelize(dbName, user, password, {
  host,
  dialect: 'mysql',
});

export default db;
