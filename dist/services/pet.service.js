"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const fs = __importStar(require("fs"));
const uuid_1 = require("uuid");
const pet_model_1 = __importDefault(require("../models/pet.model"));
const routes_config_1 = require("./../config/routes.config");
class PetService {
    getAll(limit, offset) {
        return __awaiter(this, void 0, void 0, function* () {
            return pet_model_1.default.findAll({
                where: {},
                limit: limit && Number(limit),
                offset: offset && Number(offset),
            });
        });
    }
    getById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return pet_model_1.default.findOne({ where: { id } });
        });
    }
    create(resource) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = uuid_1.v4();
            if (resource.picture) {
                resource.picture = this.writePicture(`${id}`, resource.picture);
            }
            yield pet_model_1.default.create(Object.assign(Object.assign({}, resource), { id }));
            return id;
        });
    }
    update(record, resource) {
        return __awaiter(this, void 0, void 0, function* () {
            if (resource.picture) {
                resource.picture = this.writePicture(`${record.get('id')}`, resource.picture);
            }
            return record.update(Object.assign({}, resource));
        });
    }
    delete(record) {
        return __awaiter(this, void 0, void 0, function* () {
            if (record.picture !== null) {
                this.removePicture(record.id);
            }
            yield record.destroy();
        });
    }
    deleteAll() {
        return __awaiter(this, void 0, void 0, function* () {
            yield pet_model_1.default.truncate();
        });
    }
    getVaccines(record) {
        return __awaiter(this, void 0, void 0, function* () {
            return record.getVaccines();
        });
    }
    /**
     * Escribe una archivo de tipo jpeg en el servidor
     * @param petId Id del Pet
     * @param pictureBase64 String del su imagen en codificada en base64
     * @returns El path de la imagen guardada en el servidor
     */
    writePicture(petId, pictureBase64) {
        const filename = `${petId}.jpeg`;
        const picturePath = `${routes_config_1.PET_PICTURES_PATH}/${filename}`;
        // decode base64
        const bufferString = Buffer.from(pictureBase64, 'base64');
        // file put contents
        fs.writeFileSync(`${routes_config_1.STATIC_FILES_DIRECTORY}${picturePath}`, bufferString);
        return picturePath;
    }
    removePicture(petId) {
        const filename = `${petId}.jpeg`;
        const picturePath = `${routes_config_1.PET_PICTURES_PATH}/${filename}`;
        fs.unlinkSync(`${routes_config_1.STATIC_FILES_DIRECTORY}${picturePath}`);
    }
}
exports.default = new PetService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvcGV0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXlCO0FBQ3pCLCtCQUFvQztBQUdwQyxvRUFBc0M7QUFDdEMsNkRBQXNGO0FBRXRGLE1BQU0sVUFBVTtJQUVSLE1BQU0sQ0FBQyxLQUF5QixFQUFFLE1BQTBCOztZQUNoRSxPQUFPLG1CQUFHLENBQUMsT0FBTyxDQUFDO2dCQUNqQixLQUFLLEVBQUUsRUFBRztnQkFDVixLQUFLLEVBQUUsS0FBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUM7Z0JBQzdCLE1BQU0sRUFBRSxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQzthQUNqQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7SUFFSyxPQUFPLENBQUMsRUFBVTs7WUFDdEIsT0FBTyxtQkFBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN4QyxDQUFDO0tBQUE7SUFFSyxNQUFNLENBQUMsUUFBK0I7O1lBQzFDLE1BQU0sRUFBRSxHQUFHLFNBQU0sRUFBRSxDQUFDO1lBQ3BCLElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRTtnQkFDcEIsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxFQUFFLEVBQUUsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ2pFO1lBQ0QsTUFBTSxtQkFBRyxDQUFDLE1BQU0saUNBQU0sUUFBUSxLQUFFLEVBQUUsSUFBRyxDQUFDO1lBQ3RDLE9BQU8sRUFBRSxDQUFDO1FBQ1osQ0FBQztLQUFBO0lBRUssTUFBTSxDQUFDLE1BQVcsRUFBRSxRQUErQjs7WUFDdkQsSUFBSSxRQUFRLENBQUMsT0FBTyxFQUFFO2dCQUNwQixRQUFRLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQ2xDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQ3hDLENBQUM7YUFDSDtZQUNELE9BQU8sTUFBTSxDQUFDLE1BQU0sbUJBQU0sUUFBUSxFQUFHLENBQUM7UUFDeEMsQ0FBQztLQUFBO0lBRUssTUFBTSxDQUFDLE1BQVc7O1lBQ3RCLElBQUksTUFBTSxDQUFDLE9BQU8sS0FBSyxJQUFJLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBQy9CO1lBQ0QsTUFBTSxNQUFNLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDekIsQ0FBQztLQUFBO0lBRUssU0FBUzs7WUFDYixNQUFNLG1CQUFHLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdkIsQ0FBQztLQUFBO0lBRUssV0FBVyxDQUFDLE1BQVc7O1lBQzNCLE9BQU8sTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlCLENBQUM7S0FBQTtJQUVEOzs7OztPQUtHO0lBQ0ssWUFBWSxDQUFDLEtBQWEsRUFBRSxhQUFxQjtRQUN2RCxNQUFNLFFBQVEsR0FBRyxHQUFHLEtBQUssT0FBTyxDQUFDO1FBQ2pDLE1BQU0sV0FBVyxHQUFHLEdBQUcsaUNBQWlCLElBQUksUUFBUSxFQUFFLENBQUM7UUFDdkQsZ0JBQWdCO1FBQ2hCLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzFELG9CQUFvQjtRQUNwQixFQUFFLENBQUMsYUFBYSxDQUFDLEdBQUcsc0NBQXNCLEdBQUcsV0FBVyxFQUFFLEVBQUUsWUFBWSxDQUFDLENBQUM7UUFDMUUsT0FBTyxXQUFXLENBQUM7SUFDckIsQ0FBQztJQUVPLGFBQWEsQ0FBQyxLQUFhO1FBQ2pDLE1BQU0sUUFBUSxHQUFHLEdBQUcsS0FBSyxPQUFPLENBQUM7UUFDakMsTUFBTSxXQUFXLEdBQUcsR0FBRyxpQ0FBaUIsSUFBSSxRQUFRLEVBQUUsQ0FBQztRQUN2RCxFQUFFLENBQUMsVUFBVSxDQUFDLEdBQUcsc0NBQXNCLEdBQUcsV0FBVyxFQUFFLENBQUMsQ0FBQztJQUMzRCxDQUFDO0NBQ0Y7QUFFRCxrQkFBZSxJQUFJLFVBQVUsRUFBRSxDQUFDIn0=