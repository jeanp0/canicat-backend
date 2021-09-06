import {
  Association,
  DataTypes,
  HasManyAddAssociationMixin,
  HasManyCountAssociationsMixin,
  HasManyCreateAssociationMixin,
  HasManyGetAssociationsMixin,
  HasManyHasAssociationMixin,
  Model,
} from 'sequelize';
import db from '../config/db.config';
import {
  PetAttributes,
  PetCreationAttributes,
} from '../interfaces/pet.attributes';
import Vaccine from './vaccine.model';

class Pet
  extends Model<PetAttributes, PetCreationAttributes>
  implements PetAttributes
{
  id!: string;

  name!: string;

  species!: string;

  breed!: string;

  sexo!: string;

  picture!: string | null;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;

  public getVaccines!: HasManyGetAssociationsMixin<Vaccine>;

  public addVaccine!: HasManyAddAssociationMixin<Vaccine, string>;

  public hasVaccine!: HasManyHasAssociationMixin<Vaccine, string>;

  public countVaccines!: HasManyCountAssociationsMixin;

  public createVaccine!: HasManyCreateAssociationMixin<Vaccine>;

  public readonly vaccines?: Vaccine[];

  public static associations: {
    vaccines: Association<Pet, Vaccine>;
  };
}

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
    species: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    breed: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sexo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    picture: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db, // connection instance
  },
);

Pet.hasMany(Vaccine, {
  sourceKey: 'id',
  foreignKey: 'petId',
  as: 'vaccines',
  onDelete: 'CASCADE',
});

export default Pet;
