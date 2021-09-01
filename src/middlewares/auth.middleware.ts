import { verify } from 'argon2';
import express from 'express';
import userService from '../services/user.service';

class AuthMiddleware {

  async verifyUserPassword(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction,
  ) {
    const { email, password } = req.body;
    const user = await userService.getByEmail(email);
    if (user) {
      const passwordHashed = user.password;
      if (await verify(passwordHashed, password)) {
        res.locals.userLogged = user;
        return next();
      }
    }
    res.status(400).send({ error: 'Correo electrónico y/o contraseña incorrecta' });
  }
}

export default new AuthMiddleware();