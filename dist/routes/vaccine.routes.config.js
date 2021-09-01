"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VaccineRoutes = void 0;
const express_validator_1 = require("express-validator");
const routes_config_1 = require("../config/routes.config");
const vaccine_controller_1 = __importDefault(require("../controllers/vaccine.controller"));
const body_validation_middleware_1 = __importDefault(require("../middlewares/body.validation.middleware"));
const vaccine_validation_middleware_1 = __importDefault(require("../middlewares/vaccine.validation.middleware"));
const common_routes_config_1 = require("./common.routes.config");
class VaccineRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'VaccineRecordRoutes');
    }
    configureRoutes() {
        this.app
            .route(`${routes_config_1.BASE_URI}${routes_config_1.VACCINES_URI}`)
            .get(vaccine_controller_1.default.readAll)
            .post(
        // veterinaryMiddleware.validateVeterinaryExistsByBody,
        express_validator_1.body('name').isString(), express_validator_1.body('type').isString(), express_validator_1.body('lastVaccineDate').isDate(), express_validator_1.body('nextVaccineDate').isDate().optional(), express_validator_1.body('description').isString().optional(), express_validator_1.body('petId').isUUID(4), body_validation_middleware_1.default.verifyBodyFieldsErrors, vaccine_controller_1.default.create)
            .delete(vaccine_controller_1.default.deleteAll);
        this.app
            .route(`${routes_config_1.BASE_URI}${routes_config_1.VACCINES_URI}/:id`)
            .all(vaccine_validation_middleware_1.default.validateVaccineExistsByParams)
            .get(vaccine_controller_1.default.read)
            .put(
        // veterinaryMiddleware.validateVeterinaryExistsByBody,
        express_validator_1.body('name').isString(), express_validator_1.body('type').isString(), express_validator_1.body('lastVaccineDate').isDate(), express_validator_1.body('nextVaccineDate').isDate(), express_validator_1.body('description').isString(), express_validator_1.body('petId').isUUID(4), body_validation_middleware_1.default.verifyBodyFieldsErrors, vaccine_controller_1.default.update)
            .patch(express_validator_1.body('name').isString().optional(), express_validator_1.body('type').isString().optional(), express_validator_1.body('lastVaccineDate').isDate().optional(), express_validator_1.body('nextVaccineDate').isDate().optional(), express_validator_1.body('description').isString().optional(), express_validator_1.body('petId').isUUID(4).optional(), body_validation_middleware_1.default.verifyBodyFieldsErrors, vaccine_controller_1.default.update)
            .delete(vaccine_controller_1.default.delete);
        return this.app;
    }
}
exports.VaccineRoutes = VaccineRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFjY2luZS5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlcy92YWNjaW5lLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EseURBQXlDO0FBQ3pDLDJEQUFpRTtBQUNqRSwyRkFBd0U7QUFDeEUsMkdBQWlGO0FBQ2pGLGlIQUFtRjtBQUNuRixpRUFBNEQ7QUFFNUQsTUFBYSxhQUFjLFNBQVEseUNBQWtCO0lBRW5ELFlBQVksR0FBd0I7UUFDbEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxxQkFBcUIsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEdBQUc7YUFDTCxLQUFLLENBQUMsR0FBRyx3QkFBUSxHQUFHLDRCQUFZLEVBQUUsQ0FBQzthQUNuQyxHQUFHLENBQUMsNEJBQXVCLENBQUMsT0FBTyxDQUFDO2FBQ3BDLElBQUk7UUFDSCx1REFBdUQ7UUFDdkQsd0JBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFDdkIsd0JBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFDdkIsd0JBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUNoQyx3QkFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQzNDLHdCQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQ3pDLHdCQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUN2QixvQ0FBd0IsQ0FBQyxzQkFBc0IsRUFDL0MsNEJBQXVCLENBQUMsTUFBTSxDQUMvQjthQUNBLE1BQU0sQ0FBQyw0QkFBdUIsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUU3QyxJQUFJLENBQUMsR0FBRzthQUNMLEtBQUssQ0FBQyxHQUFHLHdCQUFRLEdBQUcsNEJBQVksTUFBTSxDQUFDO2FBQ3ZDLEdBQUcsQ0FBQyx1Q0FBdUIsQ0FBQyw2QkFBNkIsQ0FBQzthQUMxRCxHQUFHLENBQUMsNEJBQXVCLENBQUMsSUFBSSxDQUFDO2FBQ2pDLEdBQUc7UUFDRix1REFBdUQ7UUFDdkQsd0JBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFDdkIsd0JBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFDdkIsd0JBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUNoQyx3QkFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTSxFQUFFLEVBQ2hDLHdCQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQzlCLHdCQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUN2QixvQ0FBd0IsQ0FBQyxzQkFBc0IsRUFDL0MsNEJBQXVCLENBQUMsTUFBTSxDQUMvQjthQUNBLEtBQUssQ0FDSix3QkFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUNsQyx3QkFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUNsQyx3QkFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQzNDLHdCQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFDM0Msd0JBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFDekMsd0JBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQ2xDLG9DQUF3QixDQUFDLHNCQUFzQixFQUMvQyw0QkFBdUIsQ0FBQyxNQUFNLENBQy9CO2FBQ0EsTUFBTSxDQUFDLDRCQUF1QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQztJQUNsQixDQUFDO0NBQ0Y7QUFwREQsc0NBb0RDIn0=