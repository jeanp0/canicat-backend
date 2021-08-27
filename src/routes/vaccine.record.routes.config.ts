import express from 'express';
import { body } from 'express-validator';
import vaccineRecordController from '../controllers/vaccine.record.controller';
import bodyValidationMiddleware from '../middlewares/body.validation.middleware';
import vaccineRecordMiddleware from '../middlewares/vaccine.record.validation.middleware';
import { BASE_URI, VACCINES_URI } from './../config/routes.config';
import { CommonRoutesConfig } from './common.routes.config';

export class VaccineRecordRoutes extends CommonRoutesConfig {

  constructor(app: express.Application) {
    super(app, 'VaccineRecordRoutes');
  }

  configureRoutes(): express.Application {
    this.app
      .route(`${BASE_URI}${VACCINES_URI}`)
      .get(vaccineRecordController.readAll)
      .post(
        // veterinaryMiddleware.validateVeterinaryExistsByBody,
        body('name').isString(),
        body('type').isString(),
        body('lastVaccineDate').isDate(),
        body('nextVaccineDate').isDate().optional(),
        body('description').isString().optional(),
        body('veterinaryId').isUUID(4),
        bodyValidationMiddleware.verifyBodyFieldsErrors,
        vaccineRecordController.create,
      )
      .delete(vaccineRecordController.deleteAll);

    this.app
      .route(`${BASE_URI}${VACCINES_URI}/:id`)
      .all(vaccineRecordMiddleware.validateVaccineRecordExistsByParams)
      .get(vaccineRecordController.read)
      .put(
        // veterinaryMiddleware.validateVeterinaryExistsByBody,
        body('name').isString(),
        body('type').isString(),
        body('lastVaccineDate').isDate(),
        body('nextVaccineDate').isDate(),
        body('description').isString(),
        body('veterinaryId').isUUID(4),
        bodyValidationMiddleware.verifyBodyFieldsErrors,
        vaccineRecordController.update,
      )
      .patch(
        body('name').isString().optional(),
        body('type').isString().optional(),
        body('lastVaccineDate').isDate().optional(),
        body('nextVaccineDate').isDate().optional(),
        body('description').isString().optional(),
        body('veterinaryId').isUUID(4).optional(),
        bodyValidationMiddleware.verifyBodyFieldsErrors,
        vaccineRecordController.update,
      )
      .delete(vaccineRecordController.delete);

    return this.app;
  }
}
