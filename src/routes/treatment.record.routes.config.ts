import express from "express";
import { body } from "express-validator";
import treatmentRecordController from "../controllers/treatment.record.controller";
import bodyValidationMiddleware from "../middlewares/body.validation.middleware";
import treatmentRecordMiddleware from "../middlewares/treatment.record.middleware";
import veterinaryMiddleware from "../middlewares/veterinary.middleware";

import { CommonRoutesConfig } from "./common.routes.config";

export class TreatmentRecordRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "TreatmentRecordRoutes");
  }

  configureRoutes(): express.Application {
    this.app
      .route("/api/treatment-records")
      .get(treatmentRecordController.readAll)
      .post(
        veterinaryMiddleware.validateVeterinaryExistsByBody,
        body("type").isString(),
        body("productName").isString(),
        body("lastTreatmentDate").isDate(),
        body("nextTreatmentDate").isDate().optional(),
        body("description").isString().optional(),
        body("veterinaryId").isUUID(4),
        bodyValidationMiddleware.verifyBodyFieldsErrors,
        treatmentRecordController.create
      )
      .delete(treatmentRecordController.deleteAll);

    this.app
      .route("/api/treatment-records/:id")
      .all(treatmentRecordMiddleware.validateTreatmentRecordExistsByParams)
      .get(treatmentRecordController.read)
      .put(
        veterinaryMiddleware.validateVeterinaryExistsByBody,
        body("type").isString(),
        body("productName").isString(),
        body("lastTreatmentDate").isDate(),
        body("nextTreatmentDate").isDate(),
        body("description").isString(),
        body("veterinaryId").isUUID(4),
        bodyValidationMiddleware.verifyBodyFieldsErrors,
        treatmentRecordController.update
      )
      .patch(
        body("type").isString().optional(),
        body("productName").isString().optional(),
        body("lastTreatmentDate").isDate().optional(),
        body("nextTreatmentDate").isDate().optional(),
        body("description").isString().optional(),
        body("veterinaryId").isUUID(4).optional(),
        bodyValidationMiddleware.verifyBodyFieldsErrors,
        treatmentRecordController.update
      )
      .delete(treatmentRecordController.delete);

    return this.app;
  }
}
