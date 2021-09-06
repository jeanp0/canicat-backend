"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_config_1 = __importDefault(require("../config/db.config"));
class Vaccine extends sequelize_1.Model {
}
Vaccine.init({
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
    type: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    lastVaccineDate: {
        type: sequelize_1.DataTypes.DATEONLY,
        allowNull: false,
    },
    nextVaccineDate: {
        type: sequelize_1.DataTypes.DATEONLY,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
    },
}, { sequelize: db_config_1.default });
exports.default = Vaccine;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFjY2luZS5tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvdmFjY2luZS5tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLHlDQUE2QztBQUM3QyxvRUFBcUM7QUFNckMsTUFBTSxPQUNKLFNBQVEsaUJBQW1EO0NBWTVEO0FBRUQsT0FBTyxDQUFDLElBQUksQ0FDVjtJQUNFLEVBQUUsRUFBRTtRQUNGLElBQUksRUFBRSxxQkFBUyxDQUFDLElBQUk7UUFDcEIsVUFBVSxFQUFFLElBQUk7UUFDaEIsU0FBUyxFQUFFLEtBQUs7UUFDaEIsWUFBWSxFQUFFLHFCQUFTLENBQUMsTUFBTTtLQUMvQjtJQUNELElBQUksRUFBRTtRQUNKLElBQUksRUFBRSxxQkFBUyxDQUFDLE1BQU07UUFDdEIsU0FBUyxFQUFFLEtBQUs7S0FDakI7SUFDRCxJQUFJLEVBQUU7UUFDSixJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO1FBQ3RCLFNBQVMsRUFBRSxLQUFLO0tBQ2pCO0lBQ0QsZUFBZSxFQUFFO1FBQ2YsSUFBSSxFQUFFLHFCQUFTLENBQUMsUUFBUTtRQUN4QixTQUFTLEVBQUUsS0FBSztLQUNqQjtJQUNELGVBQWUsRUFBRTtRQUNmLElBQUksRUFBRSxxQkFBUyxDQUFDLFFBQVE7S0FDekI7SUFDRCxXQUFXLEVBQUU7UUFDWCxJQUFJLEVBQUUscUJBQVMsQ0FBQyxNQUFNO0tBQ3ZCO0NBQ0YsRUFDRCxFQUFFLFNBQVMsRUFBRSxtQkFBRSxFQUFFLENBQ2xCLENBQUM7QUFFRixrQkFBZSxPQUFPLENBQUMifQ==