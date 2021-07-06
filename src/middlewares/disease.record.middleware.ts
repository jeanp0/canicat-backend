import express from "express";
import debug from "debug";
import diseaseRecordService from "../services/disease.record.service";

const log: debug.IDebugger = debug("app:disease-record-controller");

class DiseaseRecordMiddleware {
  async validateDiseaseRecordExists(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const { id } = req.params;
    const record = await diseaseRecordService.getById(id);
    if (!record) {
      return res.status(404).send({ msg: `Disease record ${id} not found` });
    }
    // si existe, guarda al veterinario en el objeto res.locals
    // esto para evitar repetir código en los distintos servicios
    res.locals.diseaseRecord = record;
    next();
  }
}

export default new DiseaseRecordMiddleware();
