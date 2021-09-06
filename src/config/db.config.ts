import { Sequelize } from 'sequelize';

// local
// const host = 'localhost';
// const user = 'root';
// const password = '#MySQL8:Password*';
// const dbName = 'canicatdb';

// remotemysql.com
// const host = 'remotemysql.com';
// const user = 'tXagkjtUSi';
// const password = 'xVwfRhKpgA';
// const dbName = 'tXagkjtUSi';

// clever-cloud
const host = 'beq5n68bndidrnhygdx5-mysql.services.clever-cloud.com';
const user = 'unw8xkglwm0y5tbd';
const password = 'BTtstddaxxAox20Blaqr';
const dbName = 'beq5n68bndidrnhygdx5';

const db = new Sequelize(dbName, user, password, { host, dialect: 'mysql' });

export default db;
