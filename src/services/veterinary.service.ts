import { CRUD } from "../interfaces/crud.interface";
import { v4 as uuidv4 } from "uuid";
import Veterinary from "../models/veterinary.model";
import { PostVeterinaryDto } from "../interfaces/veterinary/post.veterinary.dto";
import { PutVeterinaryDto } from "../interfaces/veterinary/put.veterinary.dto";
import { PatchVeterinaryDto } from "../interfaces/veterinary/patch.veterinary.dto";

class VeterinaryService implements CRUD {
  async read(limit: number | undefined, offset: number | undefined) {
    return Veterinary.findAll({
      where: {},
      limit: limit && Number(limit),
      offset: offset && Number(offset),
    });
  }
  async getById(id: string) {
    return Veterinary.findOne({ where: { id } });
  }
  async create(resource: PostVeterinaryDto) {
    const id = uuidv4();
    await Veterinary.create({ ...resource, id });
    return id;
  }
  async update(
    record: Veterinary,
    resource: PutVeterinaryDto | PatchVeterinaryDto
  ) {
    return record.update({ ...resource });
  }
  async delete(record: Veterinary) {
    return record.destroy();
  }
  async deleteAll() {
    return Veterinary.destroy({ truncate: true });
  }
}

export default new VeterinaryService();
