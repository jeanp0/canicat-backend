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
const log = debug_1.default('app:pet-controller');
class PetController {
    getAll(req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const limit = (_a = req.query) === null || _a === void 0 ? void 0 : _a.limit;
                const offset = (_b = req.query) === null || _b === void 0 ? void 0 : _b.offset;
                const data = yield pet_service_1.default.getAll(limit, offset);
                res.status(200).json(data);
            }
            catch (err) {
                log(err.message);
                res.status(500).json({ error: `fail to list pets.` });
            }
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.status(200).json(res.locals.pet);
            }
            catch (err) {
                log(err.message);
                res.status(500).json({ error: `fail to getById pet.` });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = yield pet_service_1.default.create(req.body);
                res.status(201).json({ id: id });
            }
            catch (err) {
                log(err.message);
                res.status(500).json({ error: `fail to create pet.` });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                log(yield pet_service_1.default.update(res.locals.pet, req.body));
                res.status(204).json();
            }
            catch (err) {
                log(err.message);
                res.status(500).json({ error: `fail to update pet.` });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                log(yield pet_service_1.default.delete(res.locals.pet));
                res.status(204).json();
            }
            catch (err) {
                log(err.message);
                res.status(500).json({ error: `fail to delete pet.` });
            }
        });
    }
    deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                log(yield pet_service_1.default.deleteAll());
                res.status(204).json();
            }
            catch (err) {
                log(err.message);
                res.status(500).json({ error: `fail to delete pets.` });
            }
        });
    }
    getVaccines(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield pet_service_1.default.getVaccines(res.locals.pet);
                res.status(200).json(data);
            }
            catch (err) {
                log(err.message);
                res
                    .status(500)
                    .json({ error: `fail to list vaccines of pet ${req.params.id}.` });
            }
        });
    }
}
exports.default = new PetController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGV0LmNvbnRyb2xsZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udHJvbGxlcnMvcGV0LmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxrREFBMEI7QUFFMUIsMEVBQWlEO0FBRWpELE1BQU0sR0FBRyxHQUFvQixlQUFLLENBQUMsb0JBQW9CLENBQUMsQ0FBQztBQUV6RCxNQUFNLGFBQWE7SUFDWCxNQUFNLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7O1lBQ3RELElBQUk7Z0JBQ0YsTUFBTSxLQUFLLEdBQUcsTUFBQSxHQUFHLENBQUMsS0FBSywwQ0FBRSxLQUEyQixDQUFDO2dCQUNyRCxNQUFNLE1BQU0sR0FBRyxNQUFBLEdBQUcsQ0FBQyxLQUFLLDBDQUFFLE1BQTRCLENBQUM7Z0JBQ3ZELE1BQU0sSUFBSSxHQUFHLE1BQU0scUJBQVUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxDQUFDO2dCQUNwRCxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUM1QjtZQUFDLE9BQU8sR0FBUSxFQUFFO2dCQUNqQixHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNqQixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxDQUFDLENBQUM7YUFDdkQ7O0tBQ0Y7SUFFSyxHQUFHLENBQUMsR0FBb0IsRUFBRSxHQUFxQjs7WUFDbkQsSUFBSTtnQkFDRixHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ3RDO1lBQUMsT0FBTyxHQUFRLEVBQUU7Z0JBQ2pCLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFD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