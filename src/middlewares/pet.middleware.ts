import express from 'express';
import debug from 'debug';
import petService from '../services/pet.service';

const log: debug.IDebugger = debug('app:pet-controller');

class PetMiddleware {
  async validatePetExists(req: express.Request, res: express.Response, next: express.NextFunction) {
    const { id } = req.params;
    const record = await petService.getById(id);
    if (!record) {
      return res.status(404).send({ msg: `Pet ${id} not found` });
    }
    res.locals.pet = record;
    next();
  }
}

export default new PetMiddleware();
