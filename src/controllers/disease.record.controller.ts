import express from "express";
import debug from "debug";
import diseaseRecordService from "../services/disease.record.service";

const log: debug.IDebugger = debug("app:disease-record-controller");

class DiseaseRecordController {
  async readAll(req: express.Request, res: express.Response) {
    try {
      const limit = req.query?.limit as number | undefined;
      const offset = req.query?.offset as number | undefined;
      log(limit, offset);
      const data = await diseaseRecordService.read(limit, offset);
      res.status(200).json(data);
    } catch (err) {
      log(err.message);
      res.status(500).json({ msg: `fail to list disease records.` });
    }
  }
  async read(req: express.Request, res: express.Response) {
    try {
      res.status(200).json(res.locals.diseaseRecord);
    } catch (err) {
      log(err.message);
      res.status(500).json({ msg: `fail to getById disease record.` });
    }
  }
  async create(req: express.Request, res: express.Response) {
    try {
      const id = await diseaseRecordService.create(req.body);
      res.status(201).json({ id: id });
    } catch (err) {
      log(err.message);
      res.status(500).json({ msg: `fail to create disease record.` });
    }
  }
  async update(req: express.Request, res: express.Response) {
    try {
      log(
        await diseaseRecordService.update(res.locals.diseaseRecord, req.body)
      );
      res.status(204).json();
    } catch (err) {
      log(err.message);
      res.status(500).json({ msg: `fail to update disease record.` });
    }
  }
  async delete(req: express.Request, res: express.Response) {
    try {
      log(await diseaseRecordService.delete(res.locals.diseaseRecord));
      res.status(204).json();
    } catch (err) {
      log(err.message);
      res.status(500).json({ msg: `fail to delete disease record.` });
    }
  }
  async deleteAll(req: express.Request, res: express.Response) {
    try {
      log(await diseaseRecordService.deleteAll());
      res.status(204).json();
    } catch (err) {
      log(err.message);
      res.status(500).json({ msg: `fail to delete disease records.` });
    }
  }
}

export default new DiseaseRecordController();
