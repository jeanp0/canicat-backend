import express from 'express';
import { CommonRoutesConfig } from './common.routes.config';
import { body } from 'express-validator';
import bodyValidationMiddleware from '../middlewares/body.validation.middleware';
import userController from '../controllers/user.controller';
import userMiddleware from '../middlewares/user.middleware';

export class UserRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'UserRoutes');
  }

  configureRoutes(): express.Application {
    this.app
      .route('/api/users')
      .get(userController.readAll)
      .post(
        body('email').isEmail(),
        body('password').isString(),
        body('firstname').isString(),
        body('lastname').isString(),
        body('dni').isString(),
        body('telf').isString().optional(),
        bodyValidationMiddleware.verifyBodyFieldsErrors,
        userController.create,
      )
      .delete(userController.deleteAll);

    this.app
      .route('/api/users/:id')
      .all(userMiddleware.validateUserExists)
      .get(userController.read)
      .put(
        body('email').isEmail(),
        body('password').isString(),
        body('firstname').isString(),
        body('lastname').isString(),
        body('dni').isString(),
        body('telf').isString(),
        bodyValidationMiddleware.verifyBodyFieldsErrors,
        userController.update,
      )
      .patch(
        body('email').isEmail().optional(),
        body('password').isString().optional(),
        body('firstname').isString().optional(),
        body('lastname').isString().optional(),
        body('dni').isString().optional(),
        body('telf').isString().optional(),
        bodyValidationMiddleware.verifyBodyFieldsErrors,
        userController.update,
      )
      .delete(userController.delete);

    return this.app;
  }
}
