"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PetRoutes = void 0;
const express_validator_1 = require("express-validator");
const pet_controller_1 = __importDefault(require("../controllers/pet.controller"));
const body_validation_middleware_1 = __importDefault(require("../middlewares/body.validation.middleware"));
const pet_middleware_1 = __importDefault(require("../middlewares/pet.middleware"));
const routes_config_1 = require("./../config/routes.config");
const common_routes_config_1 = require("./common.routes.config");
class PetRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'PetRoutes');
    }
    configureRoutes() {
        this.app
            .route(`${routes_config_1.BASE_URI}${routes_config_1.PETS_URI}`)
            .get(pet_controller_1.default.getAll)
            .post(express_validator_1.body('name').isString(), express_validator_1.body('age').isInt().optional(), express_validator_1.body('breed').isString(), express_validator_1.body('sexo').isString(), express_validator_1.body('userId').isUUID(4), express_validator_1.body('picture').isString().optional(), body_validation_middleware_1.default.verifyBodyFieldsErrors, pet_middleware_1.default.validateUserExistsByBody, pet_controller_1.default.create)
            .delete(pet_controller_1.default.deleteAll);
        this.app
            .route(`${routes_config_1.BASE_URI}${routes_config_1.PETS_URI}/:id`)
            .all(pet_middleware_1.default.validatePetExistsByParams)
            .get(pet_controller_1.default.get)
            .put(express_validator_1.body('name').isString(), express_validator_1.body('age').isInt(), express_validator_1.body('breed').isString(), express_validator_1.body('sexo').isString(), express_validator_1.body('userId').isUUID(4), express_validator_1.body('picture').isString(), body_validation_middleware_1.default.verifyBodyFieldsErrors, pet_middleware_1.default.validateUserExistsByBody, pet_controller_1.default.update)
            .patch(express_validator_1.body('name').isString().optional(), express_validator_1.body('age').isInt().optional(), express_validator_1.body('breed').isString().optional(), express_validator_1.body('sexo').isString().optional(), express_validator_1.body('userId').isUUID(4).optional(), express_validator_1.body('picture').isString().optional(), body_validation_middleware_1.default.verifyBodyFieldsErrors, pet_controller_1.default.update)
            .delete(pet_controller_1.default.delete);
        this.app
            .route(`${routes_config_1.BASE_URI}${routes_config_1.PETS_URI}/:id${routes_config_1.VACCINES_URI}`)
            .get(pet_middleware_1.default.validatePetExistsByParams, pet_controller_1.default.getVaccines);
        return this.app;
    }
}
exports.PetRoutes = PetRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGV0LnJvdXRlcy5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL3BldC5yb3V0ZXMuY29uZmlnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLHlEQUF5QztBQUN6QyxtRkFBMEQ7QUFDMUQsMkdBQWlGO0FBQ2pGLG1GQUEwRDtBQUMxRCw2REFBNkU7QUFDN0UsaUVBQTREO0FBRTVELE1BQWEsU0FBVSxTQUFRLHlDQUFrQjtJQUMvQyxZQUFZLEdBQXdCO1FBQ2xDLEtBQUssQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsR0FBRzthQUNMLEtBQUssQ0FBQyxHQUFHLHdCQUFRLEdBQUcsd0JBQVEsRUFBRSxDQUFDO2FBQy9CLEdBQUcsQ0FBQyx3QkFBYSxDQUFDLE1BQU0sQ0FBQzthQUN6QixJQUFJLENBQ0gsd0JBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFDdkIsd0JBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFDOUIsd0JBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFDeEIsd0JBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFDdkIsd0JBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQ3hCLHdCQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQ3JDLG9DQUF3QixDQUFDLHNCQUFzQixFQUMvQyx3QkFBYSxDQUFDLHdCQUF3QixFQUN0Qyx3QkFBYSxDQUFDLE1BQU0sQ0FDckI7YUFDQSxNQUFNLENBQUMsd0JBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVuQyxJQUFJLENBQUMsR0FBRzthQUNMLEtBQUssQ0FBQyxHQUFHLHdCQUFRLEdBQUcsd0JBQVEsTUFBTSxDQUFDO2FBQ25DLEdBQUcsQ0FBQyx3QkFBYSxDQUFDLHlCQUF5QixDQUFDO2FBQzVDLEdBQUcsQ0FBQyx3QkFBYSxDQUFDLEdBQUcsQ0FBQzthQUN0QixHQUFHLENBQ0Ysd0JBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFDdkIsd0JBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFDbkIsd0JBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFDeEIsd0JBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFDdkIsd0JBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQ3hCLHdCQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQzFCLG9DQUF3QixDQUFDLHNCQUFzQixFQUMvQyx3QkFBYSxDQUFDLHdCQUF3QixFQUN0Qyx3QkFBYSxDQUFDLE1BQU0sQ0FDckI7YUFDQSxLQUFLLENBQ0osd0JBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFDbEMsd0JBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFDOUIsd0JBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFDbkMsd0JBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFDbEMsd0JBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQ25DLHdCQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQ3JDLG9DQUF3QixDQUFDLHNCQUFzQixFQUMvQyx3QkFBYSxDQUFDLE1BQU0sQ0FDckI7YUFDQSxNQUFNLENBQUMsd0JBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUVoQyxJQUFJLENBQUMsR0FBRzthQUNMLEtBQUssQ0FBQyxHQUFHLHdCQUFRLEdBQUcsd0JBQVEsT0FBTyw0QkFBWSxFQUFFLENBQUM7YUFDbEQsR0FBRyxDQUFDLHdCQUFhLENBQUMseUJBQXlCLEVBQUUsd0JBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUUzRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBdkRELDhCQXVEQyJ9