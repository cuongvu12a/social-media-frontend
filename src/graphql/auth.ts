import {
  LoginInput,
  LoginResponse,
  RegisterInput,
  RegisterResponse,
} from '@src/models';

import { useMutation, gql, MutationHookOptions } from '@apollo/client';

const LOGIN = gql`
  mutation SignIn($input: SignInInput!) {
    signIn(data: $input) {
      account {
        id
        identityNumber
        firstName
        lastName
        accountName
        email
        birthday
        phoneNumber
        role
        isActive
        createdAt
        updatedAt
        deletedAt
      }
      token {
        refreshToken
        accessToken
      }
    }
  }
`;
const REGISTER = gql`
  mutation SignUp($input: SignUpInput!) {
    signUp(data: $input) {
      account {
        id
        identityNumber
        firstName
        lastName
        accountName
        email
        birthday
        phoneNumber
        role
        isActive
        createdAt
        updatedAt
        deletedAt
      }
      token {
        refreshToken
        accessToken
      }
    }
  }
`;

export const useMutationLogin = (
  options?: MutationHookOptions<{ signIn: LoginResponse }, { input: LoginInput }>
) =>
  useMutation<{ signIn: LoginResponse }, { input: LoginInput }>(LOGIN, options);

export const useMutationRegister = (
  options?: MutationHookOptions<
    { signUp: RegisterResponse },
    { input: RegisterInput }
  >
) =>
  useMutation<{ signUp: RegisterResponse }, { input: RegisterInput }>(
    REGISTER,
    options
  );
