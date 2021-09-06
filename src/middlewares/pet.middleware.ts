import debug from 'debug';
import express from 'express';
import petService from '../services/pet.service';
import userService from '../services/user.service';

const log: debug.IDebugger = debug('app:pet-controller');

class PetMiddleware {
  async validatePetExistsByParams(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    const { id } = req.params;
    const record = await petService.getById(id);
    if (!record) {
      return res
        .status(404)
        .send({ error: `La mascota ${id} no fue encuntrado` });
    }
    res.locals.pet = record;
    next();
  }

  async validateUserExistsByBody(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    const { userId } = req.body;
    const record = await userService.getById(userId);
    if (!record) {
      return res
        .status(404)
        .send({ error: `El usuario ${userId} no fue encuntrado` });
    }
    next();
  }
}

export default new PetMiddleware();
