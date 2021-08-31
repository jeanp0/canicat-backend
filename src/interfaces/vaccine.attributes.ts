import { Optional } from 'sequelize/types';

export interface VaccineAttributes {
  id: string;
  name: string;
  type: string;
  lastVaccineDate: Date;
  nextVaccineDate: Date | null;
  description: string | null;
}

export type VaccineCreationAttributes = Optional<VaccineAttributes, 'id'>;