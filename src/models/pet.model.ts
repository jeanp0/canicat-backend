import {Model, DataTypes} from "sequelize";
import db from "../config/db.config";
import {PostPetDto} from "../interfaces/pet/post.pet.dto";
import User from "./user.model";

class Pet extends Model<PostPetDto>{}

Pet.init(
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
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      race: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      sexo: {
          type: DataTypes.STRING,
          allowNull: true
      },
      color: {
        type: DataTypes.STRING,
        allowNull: true
      }
    },
    {
      sequelize: db, // connection instance
      modelName: "pet",
      // tableName: "veterinaries", // by default is the plural of modelName
    }
);

export default Pet;