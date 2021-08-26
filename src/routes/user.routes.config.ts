import express from 'express';
import { body } from 'express-validator';
import userController from '../controllers/user.controller';
import bodyValidationMiddleware from '../middlewares/body.validation.middleware';
import userMiddleware from '../middlewares/user.middleware';
import { CommonRoutesConfig } from './common.routes.config';

export class UserRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'UserRoutes');
  }

  configureRoutes(): express.Application {
    this.app
      .route('/api/users')
      .get(userController.getAll)
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
      .all(userMiddleware.validateUserExistsByParams)
      .get(userController.get)
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

    this.app
      .route('/api/users/:id/pets')
      .get(
        userMiddleware.validateUserExistsByParams,
        userController.getPets);

    return this.app;
  }
}
