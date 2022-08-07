import debug from 'debug';
import express from 'express';
import diseaseRecordService from '../services/disease.record.service';

const log: debug.IDebugger = debug('app:disease-record-controller');

class DiseaseRecordMiddleware {
  async validateDiseaseRecordExistsByParams(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    const { id } = req.params;
    const record = await diseaseRecordService.getById(id);
    if (!record) {
      return res.status(404).send({ error: `Disease record ${id} not found` });
    }
    res.locals.diseaseRecord = record;
    next();
  }
}

export default new DiseaseRecordMiddleware();
