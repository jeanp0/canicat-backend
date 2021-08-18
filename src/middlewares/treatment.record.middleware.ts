import express from 'express';
import debug from 'debug';
import treatmentRecordService from '../services/treatment.record.service';

const log: debug.IDebugger = debug('app:treatment-record-controller');

class TreatmentRecordMiddleware {
  async validateTreatmentRecordExistsByParams(req: express.Request, res: express.Response, next: express.NextFunction) {
    const { id } = req.params;
    const record = await treatmentRecordService.getById(id);
    if (!record) {
      return res.status(404).send({ message: `Treatment record ${id} not found` });
    }
    res.locals.treatmentRecord = record;
    next();
  }
}

export default new TreatmentRecordMiddleware();
