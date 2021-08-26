import { Optional } from 'sequelize/types';

export interface PetAttributes {
  id: string;
  name: string;
  species: string;
  race: string;
  sexo: string | null;
  color: string | null;
  picture: string | null;
}

export type PetCreationAttributes = Optional<PetAttributes, 'id'>;