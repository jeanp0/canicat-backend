import { DataTypes, Model } from "sequelize";
import db from "../config/db.config";
import { PostVaccineRecordDto } from "../interfaces/vaccine_record/post.vaccine.record.dto";
import Veterinary from "./veterinary.model";

class VaccineRecord extends Model {}
VaccineRecord.init(
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
  { sequelize: db, modelName: "vaccine_record" }
);

export default VaccineRecord;
