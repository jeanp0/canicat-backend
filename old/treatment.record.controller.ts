import debug from 'debug';
import express from 'express';
import treatmentRecordService from '../services/treatment.record.service';

const log: debug.IDebugger = debug('app:treatment-record-controller');

class TreatmentRecordController {

  async readAll(req: express.Request, res: express.Response) {
    try {
      const limit = req.query?.limit as number | undefined;
      const offset = req.query?.offset as number | undefined;
      const data = await treatmentRecordService.getAll(limit, offset);
      res.status(200).json(data);
    } catch (err: any) {
      log(err.message);
      res.status(500).json({ error: `fail to list treatment records.` });
    }
  }

  async read(req: express.Request, res: express.Response) {
    try {
      res.status(200).json(res.locals.treatmentRecord);
    } catch (err: any) {
      log(err.message);
      res.status(500).json({ error: `fail to getById treatment record.` });
    }
  }

  async create(req: express.Request, res: express.Response) {
    try {
      const id = await treatmentRecordService.create(req.body);
      res.status(201).json({ id: id });
    } catch (err: any) {
      log(err.message);
      res.status(500).json({ error: `fail to create treatment record.` });
    }
  }

  async update(req: express.Request, res: express.Response) {
    try {
      log(await treatmentRecordService.update(res.locals.treatmentRecord, req.body));
      res.status(204).json();
    } catch (err: any) {
      log(err.message);
      res.status(500).json({ error: `fail to update treatment record.` });
    }
  }

  async delete(req: express.Request, res: express.Response) {
    try {
      log(await treatmentRecordService.delete(res.locals.treatmentRecord));
      res.status(204).json();
    } catch (err: any) {
      log(err.message);
      res.status(500).json({ error: `fail to delete treatment record.` });
    }
  }

  async deleteAll(req: express.Request, res: express.Response) {
    try {
      log(await treatmentRecordService.deleteAll());
      res.status(204).json();
    } catch (err: any) {
      log(err.message);
      res.status(500).json({ error: `fail to delete treatment records.` });
    }
  }
}

export default new TreatmentRecordController();
