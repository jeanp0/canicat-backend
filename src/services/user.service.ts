import { v4 as uuidv4 } from "uuid";
import { CRUD } from "../interfaces/crud.interface";
import User from "../models/user.model";
import { PostUserDto } from "../interfaces/user/post.user.dto";
import { PutUserDto } from "../interfaces/user/put.user.dto";
import { PatchUserDto } from "../interfaces/user/patch.user.dto";

class UserService implements CRUD {
  async read(limit: number | undefined, offset: number | undefined) {
    return User.findAll({
      where: {},
      limit: limit && Number(limit),
      offset: offset && Number(offset),
    });
  }

  async getById(id: string) {
    return User.findOne({ where: { id } });
  }

  async create(resource: PostUserDto) {
    const id = uuidv4();
    await User.create({ ...resource, id });
    return id;
  }

  async update(record: User, resource: PutUserDto | PatchUserDto) {
    return record.update({ ...resource });
  }

  async delete(record: User) {
    return record.destroy();
  }

  async deleteAll() {
    return User.destroy({ truncate: true });
  }
}

export default new UserService();
