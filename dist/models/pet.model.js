"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_config_1 = __importDefault(require("../config/db.config"));
const vaccine_model_1 = __importDefault(require("./vaccine.model"));
class Pet extends sequelize_1.Model {
}
Pet.init({
    id: {
        type: sequelize_1.DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.UUIDV4,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    species: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    breed: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    sexo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    picture: {
        type: sequelize_1.DataTypes.STRING,
    },
}, {
    sequelize: db_config_1.default, // connection instance
});
Pet.hasMany(vaccine_model_1.default, {
    sourceKey: 'id',
    foreignKey: 'petId',
    as: 'vaccines',
    onDelete: 'CASCADE',
});
exports.default = Pet;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGV0Lm1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9wZXQubW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSx5Q0FTbUI7QUFDbkIsb0VBQXFDO0FBS3JDLG9FQUFzQztBQUV0QyxNQUFNLEdBQ0osU0FBUSxpQkFBMkM7Q0FrQ3BEO0FBRUQsR0FBRyxDQUFDLElBQUksQ0FDTjtJQUNFLEVBQUUsRUFBRTtRQUNGLElBQUksRUFBRSxxQkFBUyxDQUFDLElBQUk7UUFDcEIsVUFBVSxFQUFFLElBQUk7UUFDaEIsU0FBUyxFQUFFLEtBQUs7UUFDaEIsWUFBWSxFQUFFLHFCQUFTLENBQUMsTUFBTTtLQUMvQjtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07UUFDdEIsU0FBUyxFQUFFLEtBQUs7S0FDakI7SUFDRCxPQUFPLEVBQUU7UUFDUCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO1FBQ3RCLFNBQVMsRUFBRSxLQUFLO0tBQ2pCO0lBQ0QsS0FBSyxFQUFFO1FBQ0wsSUFBSSxFQUFFLHFCQUFTLENBQUMsTUFBTTtRQUN0QixTQUFTLEVBQUUsS0FBSztLQUNqQjtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07UUFDdEIsU0FBUyxFQUFFLEtBQUs7S0FDakI7SUFDRCxPQUFPLEVBQUU7UUFDUCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO0tBQ3ZCO0NBQ0YsRUFDRDtJQUNFLFNBQVMsRUFBRSxtQkFBRSxFQUFFLHNCQUFzQjtDQUN0QyxDQUNGLENBQUM7QUFFRixHQUFHLENBQUMsT0FBTyxDQUFDLHVCQUFPLEVBQUU7SUFDbkIsU0FBUyxFQUFFLElBQUk7SUFDZixVQUFVLEVBQUUsT0FBTztJQUNuQixFQUFFLEVBQUUsVUFBVTtJQUNkLFFBQVEsRUFBRSxTQUFTO0NBQ3BCLENBQUMsQ0FBQztBQUVILGtCQUFlLEdBQUcsQ0FBQyJ9