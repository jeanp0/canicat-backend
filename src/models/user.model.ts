import {Model, DataTypes} from "sequelize";
import db from "../config/db.config";
import { PutUserDto } from "../interfaces/user/put.user.dto";
import Pet from "./pet.model";

class User extends Model<PutUserDto>{}

User.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
          },
          name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          dni: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
          },
          telf: {
            type: DataTypes.STRING,
            allowNull: true,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          user_name: {
              type: DataTypes.STRING,
              allowNull: false,
              unique: true
          },
          password: {
            type: DataTypes.STRING,
            allowNull: false
          }
    },
    {
        sequelize: db, // connection instance
        modelName: "user",
    }
);

User.hasMany(Pet);

export default User;