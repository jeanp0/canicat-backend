import { Model, DataTypes } from 'sequelize';
import db from '../config/db.config';
import { PostUserDto } from '../interfaces/user/post.user.dto';
import Pet from './pet.model';

class User extends Model<PostUserDto> {}

User.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dni: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    telf: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db, // connection instance
    modelName: 'user',
  },
);

User.hasMany(Pet);

export default User;
