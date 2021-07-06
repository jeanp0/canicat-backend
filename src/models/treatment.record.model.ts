import { DataTypes, Model } from "sequelize";
import db from "../config/db.config";
import { PostTreatmentRecordDto } from "../interfaces/treatment_record/post.treatment.record.dto";
import Veterinary from "./veterinary.model";

class TreatmentRecord extends Model<PostTreatmentRecordDto> {}
TreatmentRecord.init(
  {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dose: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    lastTreatmentDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    nextTreatmentDate: {
      type: DataTypes.DATEONLY,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  { sequelize: db, modelName: "treatment_record" }
);

export default TreatmentRecord;
