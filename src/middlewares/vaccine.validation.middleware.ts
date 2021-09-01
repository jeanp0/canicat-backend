import debug from 'debug';
import express from 'express';
import vaccineRecordService from '../services/vaccine.service';

const log: debug.IDebugger = debug('app:vaccine-record-controller');

class VaccineMiddleware {

  async validateVaccineExistsByParams(req: express.Request, res: express.Response, next: express.NextFunction) {
    const { id } = req.params;
    const record = await vaccineRecordService.getById(id);
    if (!record) {
      return res.status(404).send({ error: `La vacuna ${id} no fue encontrada` });
    }
    res.locals.vaccineRecord = record;
    next();
  }
}

export default new VaccineMiddleware();
