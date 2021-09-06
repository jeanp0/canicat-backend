import debug from 'debug';
import express from 'express';
import vaccineRecordService from '../services/vaccine.service';

const log: debug.IDebugger = debug('app:vaccine-record-controller');

class VaccineController {
  async readAll(req: express.Request, res: express.Response) {
    try {
      const limit = req.query?.limit as number | undefined;
      const offset = req.query?.offset as number | undefined;
      const data = await vaccineRecordService.getAll(limit, offset);
      res.status(200).json(data);
    } catch (err: any) {
      log(err.message);
      res.status(500).json({ error: `fail to list vaccine records.` });
    }
  }

  async read(req: express.Request, res: express.Response) {
    try {
      res.status(200).json(res.locals.vaccineRecord);
    } catch (err: any) {
      log(err.message);
      res.status(500).json({ error: `fail to getById vaccine record.` });
    }
  }

  async create(req: express.Request, res: express.Response) {
    try {
      const id = await vaccineRecordService.create(req.body);
      res.status(201).json({ id: id });
    } catch (err: any) {
      log(err.message);
      res.status(500).json({ error: `fail to create vaccine record.` });
    }
  }

  async update(req: express.Request, res: express.Response) {
    try {
      log(
        await vaccineRecordService.update(res.locals.vaccineRecord, req.body),
      );
      res.status(204).json();
    } catch (err: any) {
      log(err.message);
      res.status(500).json({ error: `fail to update vaccine record.` });
    }
  }

  async delete(req: express.Request, res: express.Response) {
    try {
      log(await vaccineRecordService.delete(res.locals.vaccineRecord));
      res.status(204).json();
    } catch (err: any) {
      log(err.message);
      res.status(500).json({ error: `fail to delete vaccine record.` });
    }
  }

  async deleteAll(req: express.Request, res: express.Response) {
    try {
      log(await vaccineRecordService.deleteAll());
      res.status(204).json();
    } catch (err: any) {
      log(err.message);
      res.status(500).json({ error: `fail to delete vaccine records.` });
    }
  }
}

export default new VaccineController();
