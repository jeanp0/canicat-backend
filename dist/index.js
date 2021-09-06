"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const debug_1 = __importDefault(require("debug"));
const express_1 = __importDefault(require("express"));
const expressWinston = __importStar(require("express-winston"));
const http = __importStar(require("http"));
const path_1 = __importDefault(require("path"));
const winston = __importStar(require("winston"));
const db_config_1 = __importDefault(require("./config/db.config"));
const routes_config_1 = require("./config/routes.config");
const auth_routes_config_1 = require("./routes/auth.routes.config");
const pet_routes_config_1 = require("./routes/pet.routes.config");
const user_routes_config_1 = __importDefault(require("./routes/user.routes.config"));
const vaccine_routes_config_1 = require("./routes/vaccine.routes.config");
const app = express_1.default();
const server = http.createServer(app);
const PORT = process.env.PORT || routes_config_1.PORT;
const routes = [];
const debugLog = debug_1.default('app');
// se sincronizan los modelos de la instancia de la BDD
// por ejemplo, aquí es cuando crea las tablas si no existen
db_config_1.default.sync().then(() => {
    debugLog('Connect to DB. All models synchronized.');
});
// here we are adding middleware to parse all incoming requests as JSON
app.use(express_1.default.json({
    limit: '20mb',
}));
// for parsing application/x-www-form-urlencoded
app.use(express_1.default.urlencoded({
    limit: '20mb',
    extended: true,
}));
// here we are adding middleware to allow cross-origin requests
app.use(cors_1.default());
// here we are preparing the expressWinston logging middleware configuration,
// which will automatically log all HTTP requests handled by Express.js
const loggerOptions = {
    transports: [new winston.transports.Console()],
    format: winston.format.combine(winston.format.json(), winston.format.prettyPrint(), winston.format.colorize({ all: true })),
    meta: !!process.env.DEBUG, // when not debugging, log requests as one-liners
};
// initialize the logger with de above configuration
app.use(expressWinston.logger(loggerOptions));
// here we are adding the UserRoutes to our array,
// after sending the Express.js application object to have the routes added to our app!
// (here is added the routes to the app server)
// routes.push(new VeterinaryRoutes(app));
routes.push(new pet_routes_config_1.PetRoutes(app));
routes.push(new user_routes_config_1.default(app));
routes.push(new vaccine_routes_config_1.VaccineRoutes(app));
routes.push(new auth_routes_config_1.AuthRoutes(app));
// serve static files from "public" directory
// example: http://localhost:3000/pet_pictures/dogo.jpg
app.use(express_1.default.static(path_1.default.join(__dirname, routes_config_1.STATIC_FILES_DIRECTORY)));
// this is a simple route to make sure everything is working properly
const runningMessage = `Server running at http://localhost:${PORT}`;
app.get('/', (req, res) => {
    res.status(200).send(runningMessage);
});
// the already configured server listens on the corresponding port
server.listen(PORT, () => {
    routes.forEach((route) => {
        debugLog(`Routes configured for ${route.getName()}`);
    });
    // our only exception to avoiding console.log(), because we
    // always want to knoe when the server is done starting up
    console.log(runningMessage);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0RBQXdCO0FBQ3hCLGtEQUEwQjtBQUMxQixzREFBOEI7QUFDOUIsZ0VBQWtEO0FBQ2xELDJDQUE2QjtBQUM3QixnREFBd0I7QUFDeEIsaURBQW1DO0FBQ25DLG1FQUFvQztBQUNwQywwREFHZ0M7QUFDaEMsb0VBQXlEO0FBRXpELGtFQUF1RDtBQUN2RCxxRkFBcUQ7QUFDckQsMEVBQStEO0FBRS9ELE1BQU0sR0FBRyxHQUF3QixpQkFBTyxFQUFFLENBQUM7QUFDM0MsTUFBTSxNQUFNLEdBQWdCLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDbkQsTUFBTSxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLElBQUksb0JBQVUsQ0FBQztBQUM1QyxNQUFNLE1BQU0sR0FBOEIsRUFBRSxDQUFDO0FBQzdDLE1BQU0sUUFBUSxHQUFvQixlQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFL0MsdURBQXVEO0FBQ3ZELDREQUE0RDtBQUM1RCxtQkFBRSxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7SUFDbEIsUUFBUSxDQUFDLHlDQUF5QyxDQUFDLENBQUM7QUFDdEQsQ0FBQyxDQUFDLENBQUM7QUFFSCx1RUFBdUU7QUFDdkUsR0FBRyxDQUFDLEdBQUcsQ0FDTCxpQkFBTyxDQUFDLElBQUksQ0FBQztJQUNYLEtBQUssRUFBRSxNQUFNO0NBQ2QsQ0FBQyxDQUNILENBQUM7QUFFRixnREFBZ0Q7QUFDaEQsR0FBRyxDQUFDLEdBQUcsQ0FDTCxpQkFBTyxDQUFDLFVBQVUsQ0FBQztJQUNqQixLQUFLLEVBQUUsTUFBTTtJQUNiLFFBQVEsRUFBRSxJQUFJO0NBQ2YsQ0FBQyxDQUNILENBQUM7QUFFRiwrREFBK0Q7QUFDL0QsR0FBRyxDQUFDLEdBQUcsQ0FBQyxjQUFJLEVBQUUsQ0FBQyxDQUFDO0FBRWhCLDZFQUE2RTtBQUM3RSx1RUFBdUU7QUFDdkUsTUFBTSxhQUFhLEdBQWlDO0lBQ2xELFVBQVUsRUFBRSxDQUFDLElBQUksT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUM5QyxNQUFNLEVBQUUsT0FBTyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEVBQ3JCLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLEVBQzVCLE9BQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxDQUFDLENBQ3ZDO0lBQ0QsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssRUFBRSxpREFBaUQ7Q0FDN0UsQ0FBQztBQUVGLG9EQUFvRDtBQUNwRCxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztBQUU5QyxrREFBa0Q7QUFDbEQsdUZBQXVGO0FBQ3ZGLCtDQUErQztBQUMvQywwQ0FBMEM7QUFDMUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLDZCQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksNEJBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0FBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxxQ0FBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7QUFDcEMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLCtCQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUVqQyw2Q0FBNkM7QUFDN0MsdURBQXVEO0FBQ3ZELEdBQUcsQ0FBQyxHQUFHLENBQUMsaUJBQU8sQ0FBQyxNQUFNLENBQUMsY0FBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsc0NBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFFdEUscUVBQXFFO0FBQ3JFLE1BQU0sY0FBYyxHQUFHLHNDQUFzQyxJQUFJLEVBQUUsQ0FBQztBQUNwRSxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQW9CLEVBQUUsR0FBcUIsRUFBRSxFQUFFO0lBQzNELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0FBRUgsa0VBQWtFO0FBQ2xFLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRTtJQUN2QixNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBeUIsRUFBRSxFQUFFO1FBQzNDLFFBQVEsQ0FBQyx5QkFBeUIsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFLENBQUMsQ0FBQztJQUN2RCxDQUFDLENBQUMsQ0FBQztJQUNILDJEQUEyRDtJQUMzRCwwREFBMEQ7SUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUM5QixDQUFDLENBQUMsQ0FBQyJ9