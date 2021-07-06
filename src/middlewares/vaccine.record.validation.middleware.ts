import express from "express";
import debug from "debug";
import vaccineRecordService from "../services/vaccine.record.service";
const log: debug.IDebugger = debug("app:vaccine-record-controller");

class VaccineRecordMiddleware {
  async validateVaccineRecordExistsByParams(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) {
    const { id } = req.params;
    const record = await vaccineRecordService.getById(id);
    if (!record) {
      return res
        .status(404)
        .send({ message: `Vaccine record ${id} not found` });
    }
    res.locals.vaccineRecord = record;
    next();
  }
}

export default new VaccineRecordMiddleware();
