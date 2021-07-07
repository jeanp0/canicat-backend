import { v4 as uuidv4 } from "uuid";
import Pet from "../models/pet.model";
import { PostPetDto } from "../interfaces/pet/post.pet.dto";
import { PutPetDto } from "../interfaces/pet/put.pet.dto";
import { PatchPetDto } from "../interfaces/pet/patch.pet.dto";
import { CRUD } from "../interfaces/crud.interface";

class PetService implements CRUD {
  async read(limit: number | undefined, offset: number | undefined) {
    return Pet.findAll({
      where: {},
      limit: limit && Number(limit),
      offset: offset && Number(offset),
    });
  }
  async getById(id: string) {
    return Pet.findOne({ where: { id } });
  }
  async create(resource: PostPetDto) {
    const id = uuidv4();
    await Pet.create({ ...resource, id });
    return id;
  }
  async update(record: Pet, resource: PutPetDto | PatchPetDto) {
    return record.update({ ...resource });
  }
  async delete(record: Pet) {
    return record.destroy();
  }
  async deleteAll() {
    return Pet.destroy({ truncate: true });
  }
}

export default new PetService();
