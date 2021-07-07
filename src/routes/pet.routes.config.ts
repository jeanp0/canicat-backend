import express from "express";
import { CommonRoutesConfig } from "./common.routes.config";
import petMiddleware from '../middlewares/pet.middleware';
import { body, check } from "express-validator";
import bodyValidationMiddleware from "../middlewares/body.validation.middleware";
import petController from "../controllers/pet.controller";

export class PetRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, "PetRoutes");
    }

    configureRoutes(): express.Application{
      this.app
      .route("/api/pets")
      .get(petController.readAll)
      .post(
        body("name").isString(),
        body("age").isString(),
        body("race").isString(),
        body("sexo").isString(),
        body("color").isString().optional(),
        bodyValidationMiddleware.verifyBodyFieldsErrors,
        petController.create
      )
      .delete(petController.deleteAll);

      this.app
      .route("/api/pets/:id")
      .all(petMiddleware.validatePetExists)
      .get(petController.read)
      .put(
        body("name").isString(),
        body("age").isString(),
        body("race").isString(),
        body("sexo").isString(),
        body("color").isString(),
        bodyValidationMiddleware.verifyBodyFieldsErrors,
        petController.update
      )
      .patch(
        body("name").isString().optional(),
        body("age").isString().optional(),
        body("race").isString().optional(),
        body("sexo").isString().optional(),
        body("color").isString().optional(),
        bodyValidationMiddleware.verifyBodyFieldsErrors,
        petController.update
      )
      .delete(petController.delete);

      return this.app;
    }
}