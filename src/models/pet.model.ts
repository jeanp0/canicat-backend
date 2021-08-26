import { DataTypes, Model } from 'sequelize';
import db from '../config/db.config';
import { PetAttributes } from '../interfaces/pet/pet.attributes';
import { PetCreationAttributes } from './../interfaces/pet/pet.attributes';
import DiseaseRecord from './disease.record.model';
import TreatmentRecord from './treatment.record.model';
import VaccineRecord from './vaccine.record.model';

class Pet extends Model<PetAttributes, PetCreationAttributes> implements PetAttributes {
  id!: string;
  name!: string;
  species!: string;
  race!: string;
  sexo!: string | null;
  color!: string | null;
  picture!: string | null;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
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
    race: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sexo: {
      type: DataTypes.STRING,
    },
    color: {
      type: DataTypes.STRING,
    },
    picture: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize: db, // connection instance
  },
);

// Pet.belongsTo(User);

Pet.hasOne(VaccineRecord);
Pet.hasOne(TreatmentRecord);
Pet.hasOne(DiseaseRecord);

export default Pet;
