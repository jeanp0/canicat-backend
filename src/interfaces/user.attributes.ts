import { Optional } from 'sequelize/types';

export interface UserAttributes {
  id: string;
  email: string;
  password: string;
  firstname: string;
  lastname: string | null;
  dni: string;
  telf: string | null;
}

export type UserCreationAttributes = Optional<UserAttributes, 'id'>;
