"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
// const host = 'localhost';
// const user = 'root';
// const password = '#MySQL8:Password*';
// const dbName = 'canicatdb';
const host = 'remotemysql.com';
const user = 'tXagkjtUSi';
const password = 'xVwfRhKpgA';
const dbName = 'tXagkjtUSi';
const db = new sequelize_1.Sequelize(dbName, user, password, { host, dialect: 'mysql' });
exports.default = db;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbmZpZy9kYi5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBc0M7QUFFdEMsNEJBQTRCO0FBQzVCLHVCQUF1QjtBQUN2Qix3Q0FBd0M7QUFDeEMsOEJBQThCO0FBQzlCLE1BQU0sSUFBSSxHQUFHLGlCQUFpQixDQUFDO0FBQy9CLE1BQU0sSUFBSSxHQUFHLFlBQVksQ0FBQztBQUMxQixNQUFNLFFBQVEsR0FBRyxZQUFZLENBQUM7QUFDOUIsTUFBTSxNQUFNLEdBQUcsWUFBWSxDQUFDO0FBRTVCLE1BQU0sRUFBRSxHQUFHLElBQUkscUJBQVMsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQztBQUU3RSxrQkFBZSxFQUFFLENBQUMifQ==