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
const argon2_1 = require("argon2");
const uuid_1 = require("uuid");
const user_model_1 = __importDefault(require("../models/user.model"));
class UserService {
    getAll(limit, offset) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_model_1.default.findAll({
                where: {},
                limit: limit && Number(limit),
                offset: offset && Number(offset),
            });
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_model_1.default.findByPk(id);
        });
    }
    getByEmail(email) {
        return __awaiter(this, void 0, void 0, function* () {
            return user_model_1.default.findOne({ where: { email } });
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = uuid_1.v4();
            // password encrypted with argon2
            resource.password = yield argon2_1.hash(resource.password);
            yield user_model_1.default.create(Object.assign(Object.assign({}, resource), { id }));
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
            yield record.destroy();
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            yield user_model_1.default.truncate();
        });
    }
    getPets(record) {
        return __awaiter(this, void 0, void 0, function* () {
            return record.getPets();
        });
    }
}
exports.default = new UserService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3NlcnZpY2VzL3VzZXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBLG1DQUE4QjtBQUM5QiwrQkFBb0M7QUFHcEMsc0VBQXdDO0FBRXhDLE1BQU0sV0FBVztJQUVULE1BQU0sQ0FBQyxLQUF5QixFQUFFLE1BQTBCOztZQUNoRSxPQUFPLG9CQUFJLENBQUMsT0FBTyxDQUFDO2dCQUNsQixLQUFLLEVBQUUsRUFBRztnQkFDVixLQUFLLEVBQUUsS0FBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQzdCLE1BQU0sRUFBRSxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUNqQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7SUFFSyxPQUFPLENBQUMsRUFBVTs7WUFDdEIsT0FBTyxvQkFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMzQixDQUFDO0tBQUE7SUFFSyxVQUFVLENBQUMsS0FBYTs7WUFDNUIsT0FBTyxvQkFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUM1QyxDQUFDO0tBQUE7SUFFSyxNQUFNLENBQUMsUUFBZ0M7O1lBQzNDLE1BQU0sRUFBRSxHQUFHLFNBQU0sRUFBRSxDQUFDO1lBQ3BCLGlDQUFpQztZQUNqQyxRQUFRLENBQUMsUUFBUSxHQUFHLE1BQU0sYUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNsRCxNQUFNLG9CQUFJLENBQUMsTUFBTSxpQ0FBTSxRQUFRLEtBQUUsRUFBRSxJQUFHLENBQUM7WUFDdkMsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDO0tBQUE7SUFFSyxNQUFNLENBQUMsTUFBWSxFQUFFLFFBQWdDOztZQUN6RCxPQUFPLE1BQU0sQ0FBQyxNQUFNLG1CQUFNLFFBQVEsRUFBRyxDQUFDO1FBQ3hDLENBQUM7S0FBQTtJQUVLLE1BQU0sQ0FBQyxNQUFZOztZQUN2QixNQUFNLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6QixDQUFDO0tBQUE7SUFFSyxTQUFTOztZQUNiLE1BQU0sb0JBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN4QixDQUFDO0tBQUE7SUFFSyxPQUFPLENBQUMsTUFBWTs7WUFDeEIsT0FBTyxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDMUIsQ0FBQztLQUFBO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLFdBQVcsRUFBRSxDQUFDIn0=