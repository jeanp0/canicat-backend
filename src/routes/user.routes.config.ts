import express from "express";
import { CommonRoutesConfig } from "./common.routes.config";
import { body, check } from "express-validator";
import bodyValidationMiddleware from "../middlewares/body.validation.middleware";
import userController from "../controllers/user.controller";
import userMiddleware from "../middlewares/user.middleware";

export class UserRoutes extends CommonRoutesConfig{
    constructor(app: express.Application) {
        super(app, "UserRoutes");
    }

    configureRoutes(): express.Application{
       this.app
      .route("/api/users")
      .get(userController.readAll)
      .post(
        body("name").isString(),
        body("dni").isString(),
        body("telf").isString().optional(),
        body("email").isString(),
        body("user_name").isString(),
        body("password").isString(),
        bodyValidationMiddleware.verifyBodyFieldsErrors,
        userController.create
      )
      .delete(userController.deleteAll);

      this.app
      .route("/api/users/:id")
      .all(userMiddleware.validateUserExists)
      .get(userController.read)
      .put(
        body("name").isString(),
        body("dni").isString(),
        body("telf").isString().optional(),
        body("email").isString(),
        body("user_name").isString(),
        body("password").isString(),
        bodyValidationMiddleware.verifyBodyFieldsErrors,
        userController.update
      )
      .patch(
        body("name").isString(),
        body("dni").isString(),
        body("telf").isString().optional(),
        body("email").isString(),
        body("user_name").isString(),
        body("password").isString(),
        bodyValidationMiddleware.verifyBodyFieldsErrors,
        userController.update
      )
      .delete(userController.delete);

      return this.app;
    }
}