import express from "express";
import debug from "debug";
import veterinaryService from "../services/veterinary.service";

const log: debug.IDebugger = debug("app:veterinary-controller");

class VeterinaryMiddleware {
  async validateVeterinaryExistsByParams(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const { id } = req.params;
    const record = await veterinaryService.getById(id);
    if (!record) {
      return res.status(404).send({ message: `Veterinary ${id} not found` });
    }
    // si existe, guarda al veterinario en el objeto res.locals
    // esto para evitar repetir código en los distintos servicios
    res.locals.veterinary = record;
    next();
  }

  async validateVeterinaryExistsByBody(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const { veterinaryId } = req.body;
    if (!veterinaryId) {
      return res
        .status(500)
        .send({ message: `Must be send a veterinaryId property on body` });
    }
    const record = await veterinaryService.getById(veterinaryId);
    if (!record) {
      return res
        .status(404)
        .send({ message: `Veterinary ${veterinaryId} not found` });
    }
    next();
  }
}

export default new VeterinaryMiddleware();
