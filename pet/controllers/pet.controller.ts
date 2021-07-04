import express from "express";
import debug from "debug";
import petService from "../services/pet.service";

const log: debug.IDebugger = debug("app:pet-controller");

class PetController {
  async list(req: express.Request, res: express.Response) {
    const test = await petService.list();
    res.status(200).json(test);
  }
}

export default new PetController();
