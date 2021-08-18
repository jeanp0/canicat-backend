import express from 'express';
import debug from 'debug';
import veterinaryService from '../services/veterinary.service';

const log: debug.IDebugger = debug('app:veterinary-controller');

class VeterinaryController {
  async readAll(req: express.Request, res: express.Response) {
    try {
      const limit = req.query?.limit as number | undefined;
      const offset = req.query?.offset as number | undefined;
      const data = await veterinaryService.read(limit, offset);
      res.status(200).json(data);
    } catch (err: any) {
      log(err.message);
      res.status(500).json({ message: `fail to list veterinaries.` });
    }
  }
  async read(req: express.Request, res: express.Response) {
    try {
      res.status(200).json(res.locals.veterinary);
    } catch (err: any) {
      log(err.message);
      res.status(500).json({ message: `fail to getById veterinary.` });
    }
  }
  async create(req: express.Request, res: express.Response) {
    try {
      const id = await veterinaryService.create(req.body);
      res.status(201).json({ id: id });
    } catch (err: any) {
      log(err.message);
      res.status(500).json({ message: `fail to create veterinarie.` });
    }
  }
  async update(req: express.Request, res: express.Response) {
    try {
      log(await veterinaryService.update(res.locals.veterinary, req.body));
      res.status(204).json();
    } catch (err: any) {
      log(err.message);
      res.status(500).json({ message: `fail to update veterinarie.` });
    }
  }
  async delete(req: express.Request, res: express.Response) {
    try {
      log(await veterinaryService.delete(res.locals.veterinary));
      res.status(204).json();
    } catch (err: any) {
      log(err.message);
      res.status(500).json({ message: `fail to delete veterinarie.` });
    }
  }
  async deleteAll(req: express.Request, res: express.Response) {
    try {
      log(await veterinaryService.deleteAll());
      res.status(204).json();
    } catch (err: any) {
      log(err.message);
      res.status(500).json({ message: `fail to delete veterinaries.` });
    }
  }
}

export default new VeterinaryController();
