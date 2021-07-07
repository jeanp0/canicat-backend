import express from "express";
import debug from "debug";
import userService from "../services/user.service";

const log: debug.IDebugger = debug("app:user-controller");

class UserController {
    async readAll(req: express.Request, res: express.Response) {
        try {
          const limit = req.query?.limit as number | undefined;
          const offset = req.query?.offset as number | undefined;
          log(limit, offset);
          const data = await userService.read(limit, offset);
          res.status(200).json(data);
        } catch (err) {
          log(err.message);
          res.status(500).json({ msg: `fail to list users.` });
        }
    }
    async read(req: express.Request, res: express.Response) {
        try {
          res.status(200).json(res.locals.user);
        } catch (err) {
          log(err.message);
          res.status(500).json({ msg: `fail to getById user.` });
        }
    }
    async create(req: express.Request, res: express.Response) {
        try {
          const id = await userService.create(req.body);
          res.status(201).json({ id: id });
        } catch (err) {
            log(err.message);
          res.status(500).json({ msg: `fail to create user.` });
        }
    }
    async update(req: express.Request, res: express.Response) {
        try {
          log(await userService.update(res.locals.user, req.body));
          res.status(204).json();
        } catch (err) {
          log(err.message);
          res.status(500).json({ msg: `fail to put user.` });
        }
    }
    async delete(req: express.Request, res: express.Response) {
        try {
          log(await userService.delete(res.locals.user));
          res.status(204).json();
        } catch (err) {
          log(err.message);
          res.status(500).json({ msg: `fail to delete user.` });
        }
    }
    async deleteAll(req: express.Request, res: express.Response) {
        try {
          log(await userService.deleteAll());
          res.status(204).json();
        } catch (err) {
          log(err.message);
          res.status(500).json({ msg: `fail to delete users.` });
        }
    }
}

export default new UserController();