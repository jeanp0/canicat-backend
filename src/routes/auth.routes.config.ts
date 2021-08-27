import express from 'express';
import { body } from 'express-validator';
import authController from '../controllers/auth.controller';
import authMiddleware from '../middlewares/auth.middleware';
import bodyValidationMiddleware from '../middlewares/body.validation.middleware';
import { BASE_URI, LOGIN_URI } from './../config/routes.config';
import { CommonRoutesConfig } from './common.routes.config';

export class AuthRoutes extends CommonRoutesConfig {

  constructor(app: express.Application) {
    super(app, 'AuthRoutes');
  }

  configureRoutes(): express.Application {
    this.app.post(`${BASE_URI}${LOGIN_URI}`,
      [
        body('email').isEmail(),
        body('password').isString(),
        bodyValidationMiddleware.verifyBodyFieldsErrors,
        authMiddleware.verifyUserPassword,
      ],
      authController.login);

    return this.app;
  }
}
