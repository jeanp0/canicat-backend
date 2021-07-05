import express from "express";
import debug from "debug";
import veterinaryService from "../services/veterinary.service";

const log: debug.IDebugger = debug("app:veterinary-controller");

class VeterinaryMiddleware {
  async validateVeterinaryExists(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const { id } = req.params;
    const record = await veterinaryService.getById(id);
    if (!record) {
      return res.status(404).send({ msg: `Veterinary ${id} not found` });
    }
    // si existe, guarda al veterinario en el objeto res.locals
    // esto para evitar repetir código en los distintos servicios
    res.locals.veterinary = record;
    next();
  }
}

export default new VeterinaryMiddleware();
