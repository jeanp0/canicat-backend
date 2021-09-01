"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRoutes = void 0;
const express_validator_1 = require("express-validator");
const auth_controller_1 = __importDefault(require("../controllers/auth.controller"));
const auth_middleware_1 = __importDefault(require("../middlewares/auth.middleware"));
const body_validation_middleware_1 = __importDefault(require("../middlewares/body.validation.middleware"));
const routes_config_1 = require("./../config/routes.config");
const common_routes_config_1 = require("./common.routes.config");
class AuthRoutes extends common_routes_config_1.CommonRoutesConfig {
    constructor(app) {
        super(app, 'AuthRoutes');
    }
    configureRoutes() {
        this.app.post(`${routes_config_1.BASE_URI}${routes_config_1.LOGIN_URI}`, [
            express_validator_1.body('email').isEmail(),
            express_validator_1.body('password').isString(),
            body_validation_middleware_1.default.verifyBodyFieldsErrors,
            auth_middleware_1.default.verifyUserPassword,
        ], auth_controller_1.default.login);
        return this.app;
    }
}
exports.AuthRoutes = AuthRoutes;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5yb3V0ZXMuY29uZmlnLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlcy9hdXRoLnJvdXRlcy5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQ0EseURBQXlDO0FBQ3pDLHFGQUE0RDtBQUM1RCxxRkFBNEQ7QUFDNUQsMkdBQWlGO0FBQ2pGLDZEQUFnRTtBQUNoRSxpRUFBNEQ7QUFFNUQsTUFBYSxVQUFXLFNBQVEseUNBQWtCO0lBRWhELFlBQVksR0FBd0I7UUFDbEMsS0FBSyxDQUFDLEdBQUcsRUFBRSxZQUFZLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBRUQsZUFBZTtRQUNiLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsd0JBQVEsR0FBRyx5QkFBUyxFQUFFLEVBQ3JDO1lBQ0Usd0JBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUU7WUFDdkIsd0JBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxRQUFRLEVBQUU7WUFDM0Isb0NBQXdCLENBQUMsc0JBQXNCO1lBQy9DLHlCQUFjLENBQUMsa0JBQWtCO1NBQ2xDLEVBQ0QseUJBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUV4QixPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDbEIsQ0FBQztDQUNGO0FBbEJELGdDQWtCQyJ9