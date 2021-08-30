import { Optional } from 'sequelize/types';

export interface PetAttributes {
  id: string;
  name: string;
  species: string;
  breed: string;
  sexo: string;
  picture: string | null;
}

export type PetCreationAttributes = Optional<PetAttributes, 'id'>;