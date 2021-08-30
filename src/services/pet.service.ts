import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { CRUD } from '../interfaces/crud.interface';
import Pet from '../models/pet.model';
import { PET_PICTURES_PATH, STATIC_FILES_DIRECTORY } from './../config/routes.config';
import { PetCreationAttributes } from './../interfaces/pet/pet.attributes';

class PetService implements CRUD {

  async getAll(limit: number | undefined, offset: number | undefined) {
    return Pet.findAll({
      where: { },
      limit: limit && Number(limit),
      offset: offset && Number(offset),
    });
  }

  async getById(id: string) {
    return Pet.findOne({ where: { id } });
  }

  async create(resource: PetCreationAttributes) {
    const id = uuidv4();
    if (resource.picture) {
      resource.picture = this.writePicture(`${id}`, resource.picture);
    }
    await Pet.create({ ...resource, id });
    return id;
  }

  async update(record: Pet, resource: PetCreationAttributes) {
    if (resource.picture) {
      resource.picture = this.writePicture(
        `${record.get('id')}`, resource.picture,
      );
    }
    return record.update({ ...resource });
  }

  async delete(record: Pet) {
    if (record.picture !== null) {
      this.removePicture(record.id);
    }
    await record.destroy();
  }

  async deleteAll() {
    await Pet.truncate();
  }

  /**
   * Escribe una archivo de tipo jpeg en el servidor
   * @param petId Id del Pet
   * @param pictureBase64 String del su imagen en codificada en base64
   * @returns El path de la imagen guardada en el servidor
   */
  private writePicture(petId: string, pictureBase64: string): string {
    const filename = `${petId}.jpeg`;
    const picturePath = `${PET_PICTURES_PATH}/${filename}`;
    // decode base64
    const bufferString = Buffer.from(pictureBase64, 'base64');
    // file put contents
    fs.writeFileSync(`${STATIC_FILES_DIRECTORY}${picturePath}`, bufferString);
    return picturePath;
  }

  private removePicture(petId: string): void {
    const filename = `${petId}.jpeg`;
    const picturePath = `${PET_PICTURES_PATH}/${filename}`;
    fs.unlinkSync(`${STATIC_FILES_DIRECTORY}${picturePath}`);
  }
}

export default new PetService();
