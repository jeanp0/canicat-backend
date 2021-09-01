"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const debug_1 = __importDefault(require("debug"));
const pet_service_1 = __importDefault(require("../services/pet.service"));
const user_service_1 = __importDefault(require("../services/user.service"));
const log = debug_1.default('app:pet-controller');
class PetMiddleware {
    validatePetExistsByParams(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const record = yield pet_service_1.default.getById(id);
            if (!record) {
                return res.status(404).send({ error: `La mascota ${id} no fue encuntrado` });
            }
            res.locals.pet = record;
            next();
        });
    }
    validateUserExistsByBody(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const { userId } = req.body;
            const record = yield user_service_1.default.getById(userId);
            if (!record) {
                return res.status(404).send({ error: `El usuario ${userId} no fue encuntrado` });
            }
            next();
        });
    }
}
exports.default = new PetMiddleware();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGV0Lm1pZGRsZXdhcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvbWlkZGxld2FyZXMvcGV0Lm1pZGRsZXdhcmUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBMEI7QUFFMUIsMEVBQWlEO0FBQ2pELDRFQUFtRDtBQUVuRCxNQUFNLEdBQUcsR0FBb0IsZUFBSyxDQUFDLG9CQUFvQixDQUFDLENBQUM7QUFFekQsTUFBTSxhQUFhO0lBRVgseUJBQXlCLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCOztZQUNyRyxNQUFNLEVBQUUsRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztZQUMxQixNQUFNLE1BQU0sR0FBRyxNQUFNLHFCQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQzVDLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1gsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxjQUFjLEVBQUUsb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO2FBQzlFO1lBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDO1lBQ3hCLElBQUksRUFBRSxDQUFDO1FBQ1QsQ0FBQztLQUFBO0lBRUssd0JBQXdCLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLElBQTBCOztZQUNwRyxNQUFNLEVBQUUsTUFBTSxFQUFFLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztZQUM1QixNQUFNLE1BQU0sR0FBRyxNQUFNLHNCQUFXLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ1gsT0FBTyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxjQUFjLE1BQU0sb0JBQW9CLEVBQUUsQ0FBQyxDQUFDO2FBQ2xGO1lBQ0QsSUFBSSxFQUFFLENBQUM7UUFDVCxDQUFDO0tBQUE7Q0FDRjtBQUVELGtCQUFlLElBQUksYUFBYSxFQUFFLENBQUMifQ==