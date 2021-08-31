import { Association, DataTypes, HasManyAddAssociationMixin, HasManyCountAssociationsMixin, HasManyCreateAssociationMixin, HasManyGetAssociationsMixin, HasManyHasAssociationMixin, Model } from 'sequelize';
import db from '../config/db.config';
import { UserAttributes, UserCreationAttributes } from '../interfaces/user.attributes';
import Pet from './pet.model';

class User extends Model<UserAttributes, UserCreationAttributes> implements UserAttributes {
  id!: string;
  email!: string;
  password!: string;
  firstname!: string;
  lastname!: string | null;
  dni!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  public getPets!: HasManyGetAssociationsMixin<Pet>;
  public addPet!: HasManyAddAssociationMixin<Pet, string>;
  public hasPet!: HasManyHasAssociationMixin<Pet, string>;
  public countPets!: HasManyCountAssociationsMixin;
  public createPet!: HasManyCreateAssociationMixin<Pet>;

  public readonly pets?: Pet[];

  public static associations: {
    pets: Association<User, Pet>;
  };
}

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
  },
  {
    sequelize: db, // connection instance
  },
);

User.hasMany(Pet, {
  sourceKey: 'id',
  foreignKey: 'userId',
  as: 'pets',
  onDelete: 'CASCADE',
});

export default User;
