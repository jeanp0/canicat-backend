"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_validator_1 = require("express-validator");
const routes_config_1 = require("../config/routes.config");
const user_controller_1 = __importDefault(require("../controllers/user.controller"));
const body_validation_middleware_1 = __importDefault(require("../middlewares/body.validation.middleware"));
const user_middleware_1 = __importDefault(require("../middlewares/user.middleware"));
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
exports.default = UserRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlcy91c2VyLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQSx5REFBeUM7QUFDekMsMkRBQXdFO0FBQ3hFLHFGQUE0RDtBQUM1RCwyR0FBaUY7QUFDakYscUZBQTREO0FBQzVELGlFQUE0RDtBQUU1RCxNQUFNLFVBQVcsU0FBUSx5Q0FBa0I7SUFDekMsWUFBWSxHQUF3QjtRQUNsQyxLQUFLLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDO0lBQzNCLENBQUM7SUFFRCxlQUFlO1FBQ2IsSUFBSSxDQUFDLEdBQUc7YUFDTCxLQUFLLENBQUMsR0FBRyx3QkFBUSxHQUFHLHlCQUFTLEVBQUUsQ0FBQzthQUNoQyxHQUFHLENBQUMseUJBQWMsQ0FBQyxNQUFNLENBQUM7YUFDMUIsSUFBSSxDQUNILHdCQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQ3ZCLHdCQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQzNCLHdCQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQzVCLHdCQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQzNCLHdCQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQ3RCLG9DQUF3QixDQUFDLHNCQUFzQixFQUMvQyx5QkFBYyxDQUFDLE1BQU0sQ0FDdEI7YUFDQSxNQUFNLENBQUMseUJBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUVwQyxJQUFJLENBQUMsR0FBRzthQUNMLEtBQUssQ0FBQyxHQUFHLHdCQUFRLEdBQUcseUJBQVMsTUFBTSxDQUFDO2FBQ3BDLEdBQUcsQ0FBQyx5QkFBYyxDQUFDLDBCQUEwQixDQUFDO2FBQzlDLEdBQUcsQ0FBQyx5QkFBYyxDQUFDLEdBQUcsQ0FBQzthQUN2QixHQUFHLENBQ0Ysd0JBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFDdkIsd0JBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFDM0Isd0JBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFDNUIsd0JBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFDM0Isd0JBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEVBQUUsRUFDdEIsb0NBQXdCLENBQUMsc0JBQXNCLEVBQy9DLHlCQUFjLENBQUMsTUFBTSxDQUN0QjthQUNBLEtBQUssQ0FDSix3QkFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUNsQyx3QkFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUN0Qyx3QkFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUN2Qyx3QkFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUN0Qyx3QkFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxFQUNqQyxvQ0FBd0IsQ0FBQyxzQkFBc0IsRUFDL0MseUJBQWMsQ0FBQyxNQUFNLENBQ3RCO2FBQ0EsTUFBTSxDQUFDLHlCQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFFakMsSUFBSSxDQUFDLEdBQUc7YUFDTCxLQUFLLENBQUMsR0FBRyx3QkFBUSxHQUFHLHlCQUFTLE9BQU8sd0JBQVEsRUFBRSxDQUFDO2FBQy9DLEdBQUcsQ0FBQyx5QkFBYyxDQUFDLDBCQUEwQixFQUFFLHlCQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFMUUsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDO0lBQ2xCLENBQUM7Q0FDRjtBQUVELGtCQUFlLFVBQVUsQ0FBQyJ9