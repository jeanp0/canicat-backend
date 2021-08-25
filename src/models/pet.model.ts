import { Model, DataTypes } from 'sequelize';
import db from '../config/db.config';
import { PostPetDto } from '../interfaces/pet/post.pet.dto';
import DiseaseRecord from './disease.record.model';
import TreatmentRecord from './treatment.record.model';
import VaccineRecord from './vaccine.record.model';

class Pet extends Model<PostPetDto> { }

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
    modelName: 'pet',
  },
);

Pet.hasOne(VaccineRecord);
Pet.hasOne(TreatmentRecord);
Pet.hasOne(DiseaseRecord);

export default Pet;
