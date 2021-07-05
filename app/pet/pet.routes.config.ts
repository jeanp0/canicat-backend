import express from "express";
import { CommonRoutesConfig } from "../common/common.routes.config";
import petController from "./controllers/pet.controller";

export class PetRoutes extends CommonRoutesConfig {
  constructor(app: express.Application) {
    super(app, "PetRoutes");
  }

  // TODO: GET, POST, PUT, DELETE
  configureRoutes(): express.Application {
    this.app.route(`/pets`).get(petController.list);
    return this.app;
  }
}
