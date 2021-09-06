import debug from 'debug';
import express from 'express';
import User from '../models/user.model';

const log: debug.IDebugger = debug('app:auth-controller');

class AuthController {
  async login(req: express.Request, res: express.Response) {
    try {
      const user = res.locals.userLogged as User;
      return res.status(201).json({
        uid: user.id,
        firstname: user.firstname,
        lastname: user.lastname,
      });
    } catch (err: any) {
      log(err.message);
      res.status(500).json({ error: `fail to login user.` });
    }
  }
}

export default new AuthController();
