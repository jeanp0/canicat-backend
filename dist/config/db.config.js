"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const host = 'localhost';
const user = 'root';
const password = '#MySQL8:Password*';
const dbName = 'canicatdb';
const db = new sequelize_1.Sequelize(dbName, user, password, { host, dialect: 'mysql' });
exports.default = db;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbmZpZy9kYi5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBc0M7QUFFdEMsTUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDO0FBQ3pCLE1BQU0sSUFBSSxHQUFHLE1BQU0sQ0FBQztBQUNwQixNQUFNLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQztBQUNyQyxNQUFNLE1BQU0sR0FBRyxXQUFXLENBQUM7QUFFM0IsTUFBTSxFQUFFLEdBQUcsSUFBSSxxQkFBUyxDQUN0QixNQUFNLEVBQ04sSUFBSSxFQUNKLFFBQVEsRUFDUixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQzNCLENBQUM7QUFFRixrQkFBZSxFQUFFLENBQUMifQ==