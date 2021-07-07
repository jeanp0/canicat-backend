import { CRUD } from "../interfaces/crud.interface";
import { v4 as uuidv4 } from "uuid";

import { PatchVaccineRecordDto } from "../interfaces/vaccine_record/patch.vaccine.record.dto";
import { PostVaccineRecordDto } from "../interfaces/vaccine_record/post.vaccine.record.dto";
import { PutVaccineRecordDto } from "../interfaces/vaccine_record/put.vaccine.record.dto";
import VaccineRecord from "../models/vaccine.record.model";

class VaccineRecordService implements CRUD {
  async read(limit: number | undefined, offset: number | undefined) {
    return VaccineRecord.findAll({
      where: {},
      limit: limit && Number(limit),
      offset: offset && Number(offset),
    });
  }
  async getById(id: string) {
    return VaccineRecord.findOne({ where: { id } });
  }
  async create(resource: PostVaccineRecordDto) {
    const id = uuidv4();
    await VaccineRecord.create({ ...resource, id });
    return id;
  }
  async update(
    record: VaccineRecord,
    resource: PutVaccineRecordDto | PatchVaccineRecordDto
  ) {
    return record.update({ ...resource });
  }
  async delete(record: VaccineRecord) {
    return record.destroy();
  }
  async deleteAll() {
    return VaccineRecord.destroy({ truncate: true });
  }
}

export default new VaccineRecordService();
