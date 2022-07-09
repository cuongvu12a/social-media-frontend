import { Dayjs } from 'dayjs';
export interface LoginInput {
  email: string;
  password: string;
}

export interface LoginFormValue extends LoginInput {
  remember: boolean;
}

export interface RegisterInput {
  accountName?: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthday?: number;
  phoneNumber?: string;
}

export interface RegisterFormValue {
  accountName?: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  birthday?: Dayjs;
  phoneNumber?: string;
  agree: boolean;
  passwordConfirm: string;
}

export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}
export interface Account {
  id: string;
  identityNumber: string;
  firstName: string;
  lastName: string;
  accountName: string;
  email: string;
  birthday?: number;
  phoneNumber?: string;
  role: Role;
  isActive: boolean;
  createdAt?: number;
  updatedAt?: number;
  deletedAt?: number;
}

export interface Token {
  refreshToken: string;
  accessToken?: string;
}

export interface LoginResponse {
  account: Account;
  token: Token;
}

export interface RegisterResponse {
  account: Account;
  token: Token;
}
