import { DataTypes, Model } from "sequelize";
import db from "../config/db.config";
import { PostDiseaseDto } from "../interfaces/disease_record/post.disease.record.dto";
import Veterinary from "./veterinary.model";

class DiseaseRecord extends Model<PostDiseaseDto> {}
DiseaseRecord.init(
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
    description: {
      type: DataTypes.STRING,
    },
    veterinaryId: {
      type: DataTypes.UUID,
      references: {
        model: Veterinary,
        key: "id",
      },
    },
  },
  { sequelize: db, modelName: "disease_record" }
);

export default DiseaseRecord;
