import express from "express";
import debug from "debug";
import petService from "../services/pet.service";

const log: debug.IDebugger = debug("app:pet-controller");

class PetController {
    async readAll(req: express.Request, res: express.Response) {
        try {
          const limit = req.query?.limit as number | undefined;
          const offset = req.query?.offset as number | undefined;
          log(limit, offset);
          const data = await petService.read(limit, offset);
          res.status(200).json(data);
        } catch (err) {
          log(err.message);
          res.status(500).json({ msg: `fail to list pets.` });
        }
    }
    async read(req: express.Request, res: express.Response) {
      try {
        res.status(200).json(res.locals.pet);
      } catch (err) {
        log(err.message);
        res.status(500).json({ msg: `fail to getById pet.` });
      }
    }
    async create(req: express.Request, res: express.Response) {
      try {
        const id = await petService.create(req.body);
        res.status(201).json({ id: id });
      } catch (err) {
          log(err.message);
        res.status(500).json({ msg: `fail to create pet.` });
      }
    }
    async update(req: express.Request, res: express.Response) {
        try {
          log(await petService.update(res.locals.pet, req.body));
          res.status(204).json();
        } catch (err) {
          log(err.message);
          res.status(500).json({ msg: `fail to put pet.` });
        }
    }
    async delete(req: express.Request, res: express.Response) {
        try {
          log(await petService.delete(res.locals.pet));
          res.status(204).json();
        } catch (err) {
          log(err.message);
          res.status(500).json({ msg: `fail to delete pet.` });
        }
    }
    async deleteAll(req: express.Request, res: express.Response) {
        try {
          log(await petService.deleteAll());
          res.status(204).json();
        } catch (err) {
          log(err.message);
          res.status(500).json({ msg: `fail to delete pets.` });
        }
    }
}

export default new PetController();