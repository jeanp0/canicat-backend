import { DataTypes, Model } from "sequelize";
import db from "../config/db.config";
import { PostDiseaseRecordDto } from "../interfaces/disease_record/post.disease.record.dto";

class DiseaseRecord extends Model<PostDiseaseRecordDto> {}
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
  },
  { sequelize: db, modelName: "disease_record" }
);

export default DiseaseRecord;
