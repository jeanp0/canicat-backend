import { Sequelize } from 'sequelize';

const host = 'remotemysql.com';
const user = 'tXagkjtUSi';
const password = 'xVwfRhKpgA';
const dbName = 'tXagkjtUSi';

const db = new Sequelize(
  dbName,
  user,
  password,
  { host, dialect: 'mysql' },
);

export default db;
