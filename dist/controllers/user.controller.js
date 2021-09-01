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
const user_service_1 = __importDefault(require("../services/user.service"));
const log = debug_1.default('app:user-controller');
class UserController {
    getAll(req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const limit = (_a = req.query) === null || _a === void 0 ? void 0 : _a.limit;
                const offset = (_b = req.query) === null || _b === void 0 ? void 0 : _b.offset;
                const data = yield user_service_1.default.getAll(limit, offset);
                res.status(200).json(data);
            }
            catch (err) {
                log(err.message);
                res.status(500).json({ error: `fail to list users.` });
            }
        });
    }
    get(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.status(200).json(res.locals.user);
            }
            catch (err) {
                log(err.message);
                res.status(500).json({ error: `fail to getById user.` });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = yield user_service_1.default.create(req.body);
                res.status(201).json({ id: id });
            }
            catch (err) {
                log(err.message);
                res.status(500).json({ error: `fail to create user.` });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                log(yield user_service_1.default.update(res.locals.user, req.body));
                res.status(204).json();
            }
            catch (err) {
                log(err.message);
                res.status(500).json({ error: `fail to update user.` });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                log(yield user_service_1.default.delete(res.locals.user));
                res.status(204).json();
            }
            catch (err) {
                log(err.message);
                res.status(500).json({ error: `fail to delete user.` });
            }
        });
    }
    deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                log(yield user_service_1.default.deleteAll());
                res.status(204).json();
            }
            catch (err) {
                log(err.message);
                res.status(500).json({ error: `fail to delete users.` });
            }
        });
    }
    getPets(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const data = yield user_service_1.default.getPets(res.locals.user);
                res.status(200).json(data);
            }
            catch (err) {
                log(err.message);
                res.status(500).json({ error: `fail to list pets of user ${req.params.id}.` });
            }
        });
    }
}
exports.default = new UserController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL3VzZXIuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUEwQjtBQUUxQiw0RUFBbUQ7QUFFbkQsTUFBTSxHQUFHLEdBQW9CLGVBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO0FBRTFELE1BQU0sY0FBYztJQUVaLE1BQU0sQ0FBQyxHQUFvQixFQUFFLEdBQXFCOzs7WUFDdEQsSUFBSTtnQkFDRixNQUFNLEtBQUssR0FBRyxNQUFBLEdBQUcsQ0FBQyxLQUFLLDBDQUFFLEtBQTJCLENBQUM7Z0JBQ3JELE1BQU0sTUFBTSxHQUFHLE1BQUEsR0FBRyxDQUFDLEtBQUssMENBQUUsTUFBNEIsQ0FBQztnQkFDdkQsTUFBTSxJQUFJLEdBQUcsTUFBTSxzQkFBVyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQ3JELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVCO1lBQUMsT0FBTyxHQUFRLEVBQUU7Z0JBQ2pCLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2pCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLHFCQUFxQixFQUFFLENBQUMsQ0FBQzthQUN4RDs7S0FDRjtJQUVLLEdBQUcsQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUNuRCxJQUFJO2dCQUNGLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkM7WUFBQyxPQUFPLEdBQVEsRUFBRTtnQkFDakIsR0FBRyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENB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