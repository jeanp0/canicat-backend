import { CRUD } from "../interfaces/crud.interface";
import { v4 as uuidv4 } from "uuid";
import { PatchTreatmentRecordDto } from "../interfaces/treatment_record/patch.treatment.record.dto";

import { PutTreatmentRecordDto } from "../interfaces/treatment_record/put.treatment.record.dto";
import TreatmentRecord from "../models/treatment.record.model";
import { PostTreatmentRecordDto } from "../interfaces/treatment_record/post.treatment.record.dto";

class TreatmentRecordService implements CRUD {
  async read(limit: number | undefined, offset: number | undefined) {
    return TreatmentRecord.findAll({
      where: {},
      limit: limit && Number(limit),
      offset: offset && Number(offset),
    });
  }
  async getById(id: string) {
    return TreatmentRecord.findOne({ where: { id } });
  }
  async create(resource: PostTreatmentRecordDto) {
    const id = uuidv4();
    await TreatmentRecord.create({ ...resource, id });
    return id;
  }
  async update(
    record: TreatmentRecord,
    resource: PutTreatmentRecordDto | PatchTreatmentRecordDto
  ) {
    return record.update({ ...resource });
  }
  async delete(record: TreatmentRecord) {
    return record.destroy();
  }
  async deleteAll() {
    return TreatmentRecord.destroy({ truncate: true });
  }
}

export default new TreatmentRecordService();
