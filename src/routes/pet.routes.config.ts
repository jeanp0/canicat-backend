import express from 'express';
import { body } from 'express-validator';
import petController from '../controllers/pet.controller';
import bodyValidationMiddleware from '../middlewares/body.validation.middleware';
import petMiddleware from '../middlewares/pet.middleware';
import { CommonRoutesConfig } from './common.routes.config';

export class PetRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, 'PetRoutes');
  }

  configureRoutes(): express.Application {
    this.app
      .route('/api/pets')
      .get(petController.getAll)
      .post(
        body('name').isString(),
        body('age').isInt().optional(),
        body('race').isString(),
        body('sexo').isString().optional(),
        body('color').isString().optional(),
        body('userId').isUUID(4),
        body('picture').isString().optional(),
        bodyValidationMiddleware.verifyBodyFieldsErrors,
        petMiddleware.validateUserExistsByBody,
        petController.create,
      )
      .delete(petController.deleteAll);

    this.app
      .route('/api/pets/:id')
      .all(petMiddleware.validatePetExistsByParams)
      .get(petController.get)
      .put(
        body('name').isString(),
        body('age').isInt(),
        body('race').isString(),
        body('sexo').isString(),
        body('color').isString(),
        body('userId').isUUID(4),
        body('picture').isString(),
        bodyValidationMiddleware.verifyBodyFieldsErrors,
        petMiddleware.validateUserExistsByBody,
        petController.update,
      )
      .patch(
        body('name').isString().optional(),
        body('age').isInt().optional(),
        body('race').isString().optional(),
        body('sexo').isString().optional(),
        body('color').isString().optional(),
        body('userId').isUUID(4).optional(),
        body('picture').isString().optional(),
        bodyValidationMiddleware.verifyBodyFieldsErrors,
        petController.update,
      )
      .delete(petController.delete);

    return this.app;
  }
}
