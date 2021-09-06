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
const vaccine_service_1 = __importDefault(require("../services/vaccine.service"));
const log = debug_1.default('app:vaccine-record-controller');
class VaccineController {
    readAll(req, res) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const limit = (_a = req.query) === null || _a === void 0 ? void 0 : _a.limit;
                const offset = (_b = req.query) === null || _b === void 0 ? void 0 : _b.offset;
                const data = yield vaccine_service_1.default.getAll(limit, offset);
                res.status(200).json(data);
            }
            catch (err) {
                log(err.message);
                res.status(500).json({ error: `fail to list vaccine records.` });
            }
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                res.status(200).json(res.locals.vaccineRecord);
            }
            catch (err) {
                log(err.message);
                res.status(500).json({ error: `fail to getById vaccine record.` });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const id = yield vaccine_service_1.default.create(req.body);
                res.status(201).json({ id: id });
            }
            catch (err) {
                log(err.message);
                res.status(500).json({ error: `fail to create vaccine record.` });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                log(yield vaccine_service_1.default.update(res.locals.vaccineRecord, req.body));
                res.status(204).json();
            }
            catch (err) {
                log(err.message);
                res.status(500).json({ error: `fail to update vaccine record.` });
            }
        });
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                log(yield vaccine_service_1.default.delete(res.locals.vaccineRecord));
                res.status(204).json();
            }
            catch (err) {
                log(err.message);
                res.status(500).json({ error: `fail to delete vaccine record.` });
            }
        });
    }
    deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                log(yield vaccine_service_1.default.deleteAll());
                res.status(204).json();
            }
            catch (err) {
                log(err.message);
                res.status(500).json({ error: `fail to delete vaccine records.` });
            }
        });
    }
}
exports.default = new VaccineController();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFjY2luZS5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2NvbnRyb2xsZXJzL3ZhY2NpbmUuY29udHJvbGxlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLGtEQUEwQjtBQUUxQixrRkFBK0Q7QUFFL0QsTUFBTSxHQUFHLEdBQW9CLGVBQUssQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO0FBRXBFLE1BQU0saUJBQWlCO0lBQ2YsT0FBTyxDQUFDLEdBQW9CLEVBQUUsR0FBcUI7OztZQUN2RCxJQUFJO2dCQUNGLE1BQU0sS0FBSyxHQUFHLE1BQUEsR0FBRyxDQUFDLEtBQUssMENBQUUsS0FBMkIsQ0FBQztnQkFDckQsTUFBTSxNQUFNLEdBQUcsTUFBQSxHQUFHLENBQUMsS0FBSywwQ0FBRSxNQUE0QixDQUFDO2dCQUN2RCxNQUFNLElBQUksR0FBRyxNQUFNLHlCQUFvQixDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQzlELEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzVCO1lBQUMsT0FBTyxHQUFRLEVBQUU7Z0JBQ2pCLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2pCLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxFQUFFLCtCQUErQixFQUFFLENBQUMsQ0FBQzthQUNsRTs7S0FDRjtJQUVLLElBQUksQ0FBQyxHQUFvQixFQUFFLEdBQXFCOztZQUNwRCxJQUFJO2dCQUNGLEdBQUcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDaEQ7WUFBQyxPQUFPLEdBQVEsRUFBRTtnQkFDakIsR0FBRyxDQUFDLEdBQUcsQ0FB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