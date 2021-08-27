import debug from 'debug';
import express from 'express';
import userService from '../services/user.service';

const log: debug.IDebugger = debug('app:user-controller');

class UserController {

  async getAll(req: express.Request, res: express.Response) {
    try {
      const limit = req.query?.limit as number | undefined;
      const offset = req.query?.offset as number | undefined;
      const data = await userService.getAll(limit, offset);
      res.status(200).json(data);
    } catch (err: any) {
      log(err.message);
      res.status(500).json({ error: `fail to list users.` });
    }
  }

  async get(req: express.Request, res: express.Response) {
    try {
      res.status(200).json(res.locals.user);
    } catch (err: any) {
      log(err.message);
      res.status(500).json({ error: `fail to getById user.` });
    }
  }

  async create(req: express.Request, res: express.Response) {
    try {
      const id = await userService.create(req.body);
      res.status(201).json({ id: id });
    } catch (err: any) {
      log(err.message);
      res.status(500).json({ error: `fail to create user.` });
    }
  }

  async update(req: express.Request, res: express.Response) {
    try {
      log(await userService.update(res.locals.user, req.body));
      res.status(204).json();
    } catch (err: any) {
      log(err.message);
      res.status(500).json({ error: `fail to update user.` });
    }
  }

  async delete(req: express.Request, res: express.Response) {
    try {
      log(await userService.delete(res.locals.user));
      res.status(204).json();
    } catch (err: any) {
      log(err.message);
      res.status(500).json({ error: `fail to delete user.` });
    }
  }

  async deleteAll(req: express.Request, res: express.Response) {
    try {
      log(await userService.deleteAll());
      res.status(204).json();
    } catch (err: any) {
      log(err.message);
      res.status(500).json({ error: `fail to delete users.` });
    }
  }

  async getPets(req: express.Request, res: express.Response) {
    try {
      const data = await userService.getPets(res.locals.user);
      res.status(200).json(data);
    } catch (err: any) {
      log(err.message);
      res.status(500).json({ error: `fail to list users.` });
    }
  }
}

export default new UserController();
