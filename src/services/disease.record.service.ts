import { CRUD } from "../interfaces/crud.interface";
import { v4 as uuidv4 } from "uuid";
import DiseaseRecord from "../models/disease.record.model";
import { PostDiseaseDto } from "../interfaces/disease_record/post.disease.record.dto";
import { PatchDiseaseRecordDto } from "../interfaces/disease_record/patch.disease.record.dto";
import { PutDiseaseDto } from "../interfaces/disease_record/put.disease.record.dto";

class DiseaseRecordService implements CRUD {
  async read(limit: number | undefined, offset: number | undefined) {
    return DiseaseRecord.findAll({
      where: {},
      limit: limit && Number(limit),
      offset: offset && Number(offset),
    });
  }
  async getById(id: string) {
    return DiseaseRecord.findOne({ where: { id } });
  }
  async create(resource: PostDiseaseDto) {
    const id = uuidv4();
    console.log("AAAAAAA", id);
    await DiseaseRecord.create({ ...resource, id });
    return id;
  }
  async update(
    record: DiseaseRecord,
    resource: PutDiseaseDto | PatchDiseaseRecordDto
  ) {
    return record.update({ ...resource });
  }
  async delete(record: DiseaseRecord) {
    return record.destroy();
  }
  async deleteAll() {
    return DiseaseRecord.destroy({ truncate: true });
  }
}

export default new DiseaseRecordService();
