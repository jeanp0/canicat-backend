import { v4 as uuidv4 } from 'uuid';
import { CRUD } from '../interfaces/crud.interface';
import Vaccine from '../models/vaccine.model';
import { VaccineCreationAttributes } from './../interfaces/vaccine.attributes';

class VaccineService implements CRUD {

  async getAll(limit: number | undefined, offset: number | undefined) {
    return Vaccine.findAll({
      where: { },
      limit: limit && Number(limit),
      offset: offset && Number(offset),
    });
  }

  async getById(id: string) {
    return Vaccine.findOne({ where: { id } });
  }

  async create(resource: VaccineCreationAttributes) {
    const id = uuidv4();
    await Vaccine.create({ ...resource, id });
    return id;
  }

  async update(record: Vaccine, resource: VaccineCreationAttributes) {
    return record.update({ ...resource });
  }

  async delete(record: Vaccine) {
    return record.destroy();
  }

  async deleteAll() {
    return Vaccine.truncate();
  }
}

export default new VaccineService();
