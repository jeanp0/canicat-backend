import { v4 as uuidv4 } from 'uuid';
import { CRUD } from '../interfaces/crud.interface';
import User from '../models/user.model';
import { UserCreationAttributes } from './../interfaces/user/user.attributes';

class UserService implements CRUD {

  async getAll(limit: number | undefined, offset: number | undefined) {
    return User.findAll({
      where: {},
      limit: limit && Number(limit),
      offset: offset && Number(offset),
    });
  }

  async getById(id: string) {
    return User.findByPk(id);
  }

  async create(resource: UserCreationAttributes) {
    const id = uuidv4();
    await User.create({ ...resource, id });
    return id;
  }

  async update(record: User, resource: UserCreationAttributes) {
    return record.update({ ...resource });
  }

  async delete(record: User) {
    return record.destroy();
  }

  async deleteAll() {
    return User.destroy({ truncate: true });
  }

  async getPets(record: User) {
    // return User.findByPk('s', { include: [User.associations.pets], rejectOnEmpty: true });
    return record.getPets();
  }
}

export default new UserService();
