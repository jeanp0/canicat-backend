import { CRUD } from "../../common/interfaces/crud.interface";
import petDao from "../dao/pet.dao";

class PetService implements CRUD {
  async list() {
    return petDao.getAll();
  }
  async getById(id: string) {
    return petDao.getById(id);
  }
  async create(resource: any) {
    return petDao.create(resource);
  }
  async updateById(id: string, resource: any) {
    return petDao.updateById(id, resource);
  }
  async deleteById(id: string) {
    return petDao.deleteById(id);
  }
}

export default new PetService();
