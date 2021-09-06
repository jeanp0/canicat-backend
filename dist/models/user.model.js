"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_config_1 = __importDefault(require("../config/db.config"));
const pet_model_1 = __importDefault(require("./pet.model"));
class User extends sequelize_1.Model {
}
User.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    firstname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lastname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    dni: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
}, {
    sequelize: db_config_1.default, // connection instance
});
User.hasMany(pet_model_1.default, {
    sourceKey: 'id',
    foreignKey: 'userId',
    as: 'pets',
    onDelete: 'CASCADE',
});
exports.default = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvdXNlci5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlDQVNtQjtBQUNuQixvRUFBcUM7QUFLckMsNERBQThCO0FBRTlCLE1BQU0sSUFDSixTQUFRLGlCQUE2QztDQXdCdEQ7QUFFRCxJQUFJLENBQUMsSUFBSSxDQUNQO0lBQ0UsRUFBRSxFQUFFO1FBQ0YsSUFBSSxFQUFFLHFCQUFTLENBQUMsSUFBSTtRQUNwQixVQUFVLEVBQUUsSUFBSTtRQUNoQixTQUFTLEVBQUUsS0FBSztRQUNoQixZQUFZLEVBQUUscUJBQVMsQ0FBQyxNQUFNO0tBQy9CO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTTtRQUN0QixTQUFTLEVBQUUsS0FBSztLQUNqQjtJQUNELFFBQVEsRUFBRTtRQUNSLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07UUFDdEIsU0FBUyxFQUFFLEtBQUs7S0FDakI7SUFDRCxTQUFTLEVBQUU7UUFDVCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO1FBQ3RCLFNBQVMsRUFBRSxLQUFLO0tBQ2pCO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTTtRQUN0QixTQUFTLEVBQUUsS0FBSztLQUNqQjtJQUNELEdBQUcsRUFBRTtRQUNILElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07UUFDdEIsU0FBUyxFQUFFLEtBQUs7UUFDaEIsTUFBTSxFQUFFLElBQUk7S0FDYjtDQUNGLEVBQ0Q7SUFDRSxTQUFTLEVBQUUsbUJBQUUsRUFBRSxzQkFBc0I7Q0FDdEMsQ0FDRixDQUFDO0FBRUYsSUFBSSxDQUFDLE9BQU8sQ0FBQyxtQkFBRyxFQUFFO0lBQ2hCLFNBQVMsRUFBRSxJQUFJO0lBQ2YsVUFBVSxFQUFFLFFBQVE7SUFDcEIsRUFBRSxFQUFFLE1BQU07SUFDVixRQUFRLEVBQUUsU0FBUztDQUNwQixDQUFDLENBQUM7QUFFSCxrQkFBZSxJQUFJLENBQUMifQ==