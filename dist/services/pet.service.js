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
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
const routes_config_1 = require("../config/routes.config");
const pet_model_1 = __importDefault(require("../models/pet.model"));
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
                this.removePicture(record.picture);
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
        const filename = `/${petId}.jpeg`;
        // decode base64
        const bufferString = Buffer.from(pictureBase64, 'base64');
        // file put contents
        fs.writeFileSync(path_1.default.join(__dirname, '/..', routes_config_1.STATIC_FILES_DIRECTORY, routes_config_1.PET_PICTURES_PATH, filename), bufferString);
        return `${routes_config_1.PET_PICTURES_PATH}${filename}`;
    }
    removePicture(picture) {
        const absolutePicturePath = path_1.default.join(__dirname, '/..', routes_config_1.STATIC_FILES_DIRECTORY, picture);
        if (fs.existsSync(absolutePicturePath)) {
            fs.unlinkSync(absolutePicturePath);
        }
    }
}
exports.default = new PetService();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGV0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvc2VydmljZXMvcGV0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsdUNBQXlCO0FBQ3pCLGdEQUF3QjtBQUN4QiwrQkFBb0M7QUFDcEMsMkRBR2lDO0FBR2pDLG9FQUFzQztBQUV0QyxNQUFNLFVBQVU7SUFDUixNQUFNLENBQUMsS0FBeUIsRUFBRSxNQUEwQjs7WUFDaEUsT0FBTyxtQkFBRyxDQUFDLE9BQU8sQ0FBQztnQkFDakIsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsS0FBSyxFQUFFLEtBQUssSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUM3QixNQUFNLEVBQUUsTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUM7YUFDakMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUFBO0lBRUssT0FBTyxDQUFDLEVBQVU7O1lBQ3RCLE9BQU8sbUJBQUcsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEMsQ0FBQztLQUFBO0lBRUssTUFBTSxDQUFDLFFBQStCOztZQUMxQyxNQUFNLEVBQUUsR0FBRyxTQUFNLEVBQUUsQ0FBQztZQUNwQixJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUU7Z0JBQ3BCLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsRUFBRSxFQUFFLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNqRTtZQUNELE1BQU0sbUJBQUcsQ0FBQyxNQUFNLGlDQUFNLFFBQVEsS0FBRSxFQUFFLElBQUcsQ0FBQztZQUN0QyxPQUFPLEVBQUUsQ0FBQztRQUNaLENBQUM7S0FBQTtJQUVLLE1BQU0sQ0FBQyxNQUFXLEVBQUUsUUFBK0I7O1lBQ3ZELElBQUksUUFBUSxDQUFDLE9BQU8sRUFBRTtnQkFDcEIsUUFBUSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUNsQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFDckIsUUFBUSxDQUFDLE9BQU8sQ0FDakIsQ0FBQzthQUNIO1lBQ0QsT0FBTyxNQUFNLENBQUMsTUFBTSxtQkFBTSxRQUFRLEVBQUcsQ0FBQztRQUN4QyxDQUFDO0tBQUE7SUFFSyxNQUFNLENBQUMsTUFBVzs7WUFDdEIsSUFBSSxNQUFNLENBQUMsT0FBTyxLQUFLLElBQUksRUFBRTtnQkFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDcEM7WUFDRCxNQUFNLE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN6QixDQUFDO0tBQUE7SUFFSyxTQUFTOztZQUNiLE1BQU0sbUJBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUN2QixDQUFDO0tBQUE7SUFFSyxXQUFXLENBQUMsTUFBVzs7WUFDM0IsT0FBTyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDOUIsQ0FBQztLQUFBO0lBRUQ7Ozs7O09BS0c7SUFDSyxZQUFZLENBQUMsS0FBYSxFQUFFLGFBQXFCO1FBQ3ZELE1BQU0sUUFBUSxHQUFHLElBQUksS0FBSyxPQUFPLENBQUM7UUFDbEMsZ0JBQWdCO1FBQ2hCLE1BQU0sWUFBWSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQzFELG9CQUFvQjtRQUNwQixFQUFFLENBQUMsYUFBYSxDQUNkLGNBQUksQ0FBQyxJQUFJLENBQ1AsU0FBUyxFQUNULEtBQUssRUFDTCxzQ0FBc0IsRUFDdEIsaUNBQWlCLEVBQ2pCLFFBQVEsQ0FDVCxFQUNELFlBQVksQ0FDYixDQUFDO1FBQ0YsT0FBTyxHQUFHLGlDQUFpQixHQUFHLFFBQVEsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFFTyxhQUFhLENBQUMsT0FBZTtRQUNuQyxNQUFNLG1CQUFtQixHQUFHLGNBQUksQ0FBQyxJQUFJLENBQ25DLFNBQVMsRUFDVCxLQUFLLEVBQ0wsc0NBQXNCLEVBQ3RCLE9BQU8sQ0FDUixDQUFDO1FBQ0YsSUFBSSxFQUFFLENBQUMsVUFBVSxDQUFDLG1CQUFtQixDQUFDLEVBQUU7WUFDdEMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQztDQUNGO0FBRUQsa0JBQWUsSUFBSSxVQUFVLEVBQUUsQ0FBQyJ9