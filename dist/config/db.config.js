"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const host = 'remotemysql.com';
const user = 'tXagkjtUSi';
const password = 'xVwfRhKpgA';
const dbName = 'tXagkjtUSi';
const db = new sequelize_1.Sequelize(dbName, user, password, { host, dialect: 'mysql' });
exports.default = db;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGIuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbmZpZy9kYi5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBc0M7QUFFdEMsTUFBTSxJQUFJLEdBQUcsaUJBQWlCLENBQUM7QUFDL0IsTUFBTSxJQUFJLEdBQUcsWUFBWSxDQUFDO0FBQzFCLE1BQU0sUUFBUSxHQUFHLFlBQVksQ0FBQztBQUM5QixNQUFNLE1BQU0sR0FBRyxZQUFZLENBQUM7QUFFNUIsTUFBTSxFQUFFLEdBQUcsSUFBSSxxQkFBUyxDQUN0QixNQUFNLEVBQ04sSUFBSSxFQUNKLFFBQVEsRUFDUixFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLENBQzNCLENBQUM7QUFFRixrQkFBZSxFQUFFLENBQUMifQ==