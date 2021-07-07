import cors from "cors";
import debug from "debug";
import express from "express";
import * as expressWinston from "express-winston";
import * as http from "http";
import * as winston from "winston";
import { CommonRoutesConfig } from "./routes/common.routes.config";
import db from "./config/db.config";
import { VeterinaryRoutes } from "./routes/veterinary.routes.config";
import { PetRoutes } from "./routes/pet.routes.config";
import {UserRoutes} from "./routes/user.routes.config";
import { DiseaseRecordRoutes } from "./routes/disease.record.routes.config";
import { TreatmentRecordRoutes } from "./routes/treatment.record.routes.config";
import { VaccineRecordRoutes } from "./routes/vaccine.record.routes.config";

const app: express.Application = express();
const server: http.Server = http.createServer(app);
const PORT = 3000;
const routes: Array<CommonRoutesConfig> = [];
const debugLog: debug.IDebugger = debug("app");

// se sincronizan los modelos de la instancia de la BDD
// por ejemplo, aquí es cuando crea las tablas si no existen
db.sync().then(() => {
  debugLog("Connect to DB");
});

// here we are adding middleware to parse all incoming requests as JSON
app.use(express.json());

// here we are adding middleware to allow cross-origin requests
app.use(cors());

// here we are preparing the expressWinston logging middleware configuration,
// which will automatically log all HTTP requests handled by Express.js
const loggerOptions: expressWinston.LoggerOptions = {
  transports: [new winston.transports.Console()],
  format: winston.format.combine(
    winston.format.json(),
    winston.format.prettyPrint(),
    winston.format.colorize({ all: true })
  ),
  meta: process.env.DEBUG ? true : false, // when not debugging, log requests as one-liners
};

// initialize the logger with de above configuration
app.use(expressWinston.logger(loggerOptions));

// here we are adding the UserRoutes to our array,
// after sending the Express.js application object to have the routes added to our app!
// (here is added the routes to the app server)
routes.push(new VeterinaryRoutes(app));
routes.push(new PetRoutes(app));
routes.push(new UserRoutes(app));
routes.push(new DiseaseRecordRoutes(app));
routes.push(new TreatmentRecordRoutes(app));
routes.push(new VaccineRecordRoutes(app));

// this is a simple route to make sure everything is working properly
const runningMessage = `Server running at http://localhost:${PORT}`;
app.get("/", (req: express.Request, res: express.Response) => {
  res.status(200).send(runningMessage);
});

// the already configured server listens on the corresponding port
server.listen(PORT, () => {
  routes.forEach((route: CommonRoutesConfig) => {
    debugLog(`Routes configured for ${route.getName()}`);
  });
  // our only exception to avoiding console.log(), because we
  // always want to knoe when the server is done starting up
  console.log(runningMessage);
});
