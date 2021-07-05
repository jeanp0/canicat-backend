import debug from "debug";
import { CreatePetDto } from "../dto/create.pet.dto";
import { PutPetDto } from "../dto/put.pet.dto";
const log: debug.IDebugger = debug("app:in-memory-dao");

// DAO = Data Access Object
// DAO es un concepto que hace referencia a usar objetos para acceder a la data de la BDD
// Sequalize ORM
// SQL
class PetDao {
  constructor() {
    log("Created new instance of UsersDAO");
  }
  async getAll() {
    // simula obtención a la BDD
    const pets = [
      { id: 1, name: "hachiko" },
      { id: 2, name: "firulais" },
      { id: 3, name: "mascota x" },
      { id: 4, name: "mascota y" },
    ];
    return pets;
  }
  async getById(petId: string) {
    return "getbyid works!";
  }
  async create(pet: CreatePetDto) {
    return "create works!";
  }
  async updateById(petId: string, pet: PutPetDto) {
    return "updatebyid works!";
  }
  async deleteById(petId: string) {
    return "removebyid works!";
  }
}

export default new PetDao();
