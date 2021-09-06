import { DataTypes, Model } from 'sequelize';
import db from '../config/db.config';
import {
  VaccineAttributes,
  VaccineCreationAttributes,
} from '../interfaces/vaccine.attributes';

class Vaccine
  extends Model<VaccineAttributes, VaccineCreationAttributes>
  implements VaccineAttributes
{
  id!: string;
  name!: string;
  type!: string;
  lastVaccineDate!: Date;
  nextVaccineDate!: Date | null;
  description!: string | null;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Vaccine.init(
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
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastVaccineDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    nextVaccineDate: {
      type: DataTypes.DATEONLY,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  { sequelize: db },
);

export default Vaccine;
