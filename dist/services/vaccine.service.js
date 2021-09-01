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
const uuid_1 = require("uuid");
const vaccine_model_1 = __importDefault(require("../models/vaccine.model"));
class VaccineService {
    getAll(limit, offset) {
        return __awaiter(this, void 0, void 0, function* () {
            return vaccine_model_1.default.findAll({
                where: {},
                limit: limit && Number(limit),
                offset: offset && Number(offset),
            });
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return vaccine_model_1.default.findOne({ where: { id } });
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = uuid_1.v4();
            yield vaccine_model_1.default.create(Object.assign(Object.assign({}, resource), { id }));
            return id;
        });
    }
    update(record, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            return record.update(Object.assign({}, resource));
        });
    }
    delete(record) {
        return __awaiter(this, void 0, void 0, function* () {
            return record.destroy();
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return vaccine_model_1.default.truncate();
        });
    }
}
exports.default = new VaccineService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmFjY2luZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2VzL3ZhY2NpbmUuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUFvQztBQUVwQyw0RUFBOEM7QUFHOUMsTUFBTSxjQUFjO0lBRVosTUFBTSxDQUFDLEtBQXlCLEVBQUUsTUFBMEI7O1lBQ2hFLE9BQU8sdUJBQU8sQ0FBQyxPQUFPLENBQUM7Z0JBQ3JCLEtBQUssRUFBRSxFQUFHO2dCQUNWLEtBQUssRUFBRSxLQUFLLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQztnQkFDN0IsTUFBTSxFQUFFLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDO2FBQ2pDLENBQUMsQ0FBQztRQUNMLENBQUM7S0FBQTtJQUVLLE9BQU8sQ0FBQyxFQUFVOztZQUN0QixPQUFPLHVCQUFPLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLENBQUM7S0FBQTtJQUVLLE1BQU0sQ0FBQyxRQUFtQzs7WUFDOUMsTUFBTSxFQUFFLEdBQUcsU0FBTSxFQUFFLENBQUM7WUFDcEIsTUFBTSx1QkFBTyxDQUFDLE1BQU0saUNBQU0sUUFBUSxLQUFFLEVBQUUsSUFBRyxDQUFDO1lBQzFDLE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQztLQUFBO0lBRUssTUFBTSxDQUFDLE1BQWUsRUFBRSxRQUFtQzs7WUFDL0QsT0FBTyxNQUFNLENBQUMsTUFBTSxtQkFBTSxRQUFRLEVBQUcsQ0FBQztRQUN4QyxDQUFDO0tBQUE7SUFFSyxNQUFNLENBQUMsTUFBZTs7WUFDMUIsT0FBTyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUIsQ0FBQztLQUFBO0lBRUssU0FBUzs7WUFDYixPQUFPLHVCQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUIsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLGNBQWMsRUFBRSxDQUFDIn0=