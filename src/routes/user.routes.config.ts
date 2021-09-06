import express from 'express';
import { body } from 'express-validator';
import { BASE_URI, PETS_URI, USERS_URI } from '../config/routes.config';
import userController from '../controllers/user.controller';
import bodyValidationMiddleware from '../middlewares/body.validation.middleware';
import userMiddleware from '../middlewares/user.middleware';
import { CommonRoutesConfig } from './common.routes.config';

class UserRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'UserRoutes');
  }

  configureRoutes(): express.Application {
    this.app
      .route(`${BASE_URI}${USERS_URI}`)
      .get(userController.getAll)
      .post(
        body('email').isEmail(),
        body('password').isString(),
        body('firstname').isString(),
        body('lastname').isString(),
        body('dni').isString(),
        bodyValidationMiddleware.verifyBodyFieldsErrors,
        userController.create,
      )
      .delete(userController.deleteAll);

    this.app
      .route(`${BASE_URI}${USERS_URI}/:id`)
      .all(userMiddleware.validateUserExistsByParams)
      .get(userController.get)
      .put(
        body('email').isEmail(),
        body('password').isString(),
        body('firstname').isString(),
        body('lastname').isString(),
        body('dni').isString(),
        bodyValidationMiddleware.verifyBodyFieldsErrors,
        userController.update,
      )
      .patch(
        body('email').isEmail().optional(),
        body('password').isString().optional(),
        body('firstname').isString().optional(),
        body('lastname').isString().optional(),
        body('dni').isString().optional(),
        bodyValidationMiddleware.verifyBodyFieldsErrors,
        userController.update,
      )
      .delete(userController.delete);

    this.app
      .route(`${BASE_URI}${USERS_URI}/:id${PETS_URI}`)
      .get(userMiddleware.validateUserExistsByParams, userController.getPets);

    return this.app;
  }
}

export default UserRoutes;
