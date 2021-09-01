"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_validator_1 = require("express-validator");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const body_validation_middleware_1 = __importDefault(require("../middlewares/body.validation.middleware"));
const user_middleware_1 = __importDefault(require("../middlewares/user.middleware"));
const routes_config_1 = require("./../config/routes.config");
const common_routes_config_1 = require("./common.routes.config");
class UserRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'UserRoutes');
    }
    configureRoutes() {
        this.app
            .route(`${routes_config_1.BASE_URI}${routes_config_1.USERS_URI}`)
            .get(user_controller_1.default.getAll)
            .post(express_validator_1.body('email').isEmail(), express_validator_1.body('password').isString(), express_validator_1.body('firstname').isString(), express_validator_1.body('lastname').isString(), express_validator_1.body('dni').isString(), body_validation_middleware_1.default.verifyBodyFieldsErrors, user_controller_1.default.create)
            .delete(user_controller_1.default.deleteAll);
        this.app
            .route(`${routes_config_1.BASE_URI}${routes_config_1.USERS_URI}/:id`)
            .all(user_middleware_1.default.validateUserExistsByParams)
            .get(user_controller_1.default.get)
            .put(express_validator_1.body('email').isEmail(), express_validator_1.body('password').isString(), express_validator_1.body('firstname').isString(), express_validator_1.body('lastname').isString(), express_validator_1.body('dni').isString(), body_validation_middleware_1.default.verifyBodyFieldsErrors, user_controller_1.default.update)
            .patch(express_validator_1.body('email').isEmail().optional(), express_validator_1.body('password').isString().optional(), express_validator_1.body('firstname').isString().optional(), express_validator_1.body('lastname').isString().optional(), express_validator_1.body('dni').isString().optional(), body_validation_middleware_1.default.verifyBodyFieldsErrors, user_controller_1.default.update)
            .delete(user_controller_1.default.delete);
        this.app
            .route(`${routes_config_1.BASE_URI}${routes_config_1.USERS_URI}/:id${routes_config_1.PETS_URI}`)
            .get(user_middleware_1.default.validateUserExistsByParams, user_controller_1.default.getPets);
        return this.app;
    }
}
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlcy91c2VyLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EseURBQXlDO0FBQ3pDLHFGQUE0RDtBQUM1RCwyR0FBaUY7QUFDakYscUZBQTREO0FBQzVELDZEQUEwRTtBQUMxRSxpRUFBNEQ7QUFFNUQsTUFBYSxVQUFXLFNBQVEseUNBQWtCO0lBRWhELFlBQVksR0FBd0I7UUFDbEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxHQUFHO2FBQ0wsS0FBSyxDQUFDLEdBQUcsd0JBQVEsR0FBRyx5QkFBUyxFQUFFLENBQUM7YUFDaEMsR0FBRyxDQUFDLHlCQUFjLENBQUMsTUFBTSxDQUFDO2FBQzFCLElBQUksQ0FDSCx3QkFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUN2Qix3QkFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUMzQix3QkFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUM1Qix3QkFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUMzQix3QkFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUN0QixvQ0FBd0IsQ0FBQyxzQkFBc0IsRUFDL0MseUJBQWMsQ0FBQyxNQUFNLENBQ3RCO2FBQ0EsTUFBTSxDQUFDLHlCQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFFcEMsSUFBSSxDQUFDLEdBQUc7YUFDTCxLQUFLLENBQUMsR0FBRyx3QkFBUSxHQUFHLHlCQUFTLE1BQU0sQ0FBQzthQUNwQyxHQUFHLENBQUMseUJBQWMsQ0FBQywwQkFBMEIsQ0FBQzthQUM5QyxHQUFHLENBQUMseUJBQWMsQ0FBQyxHQUFHLENBQUM7YUFDdkIsR0FBRyxDQUNGLHdCQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQ3ZCLHdCQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQzNCLHdCQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQzVCLHdCQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQzNCLHdCQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQ3RCLG9DQUF3QixDQUFDLHNCQUFzQixFQUMvQyx5QkFBYyxDQUFDLE1BQU0sQ0FDdEI7YUFDQSxLQUFLLENBQ0osd0JBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFDbEMsd0JBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFDdEMsd0JBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFDdkMsd0JBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFDdEMsd0JBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLEVBQUUsRUFDakMsb0NBQXdCLENBQUMsc0JBQXNCLEVBQy9DLHlCQUFjLENBQUMsTUFBTSxDQUN0QjthQUNBLE1BQU0sQ0FBQyx5QkFBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRWpDLElBQUksQ0FBQyxHQUFHO2FBQ0wsS0FBSyxDQUFDLEdBQUcsd0JBQVEsR0FBRyx5QkFBUyxPQUFPLHdCQUFRLEVBQUUsQ0FBQzthQUMvQyxHQUFHLENBQ0YseUJBQWMsQ0FBQywwQkFBMEIsRUFDekMseUJBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUU1QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBckRELGdDQXFEQyJ9