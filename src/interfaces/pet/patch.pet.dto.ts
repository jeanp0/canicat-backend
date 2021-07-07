import { PutPetDto } from "./put.pet.dto";

export interface PatchPetDto extends Partial<PutPetDto> {}
