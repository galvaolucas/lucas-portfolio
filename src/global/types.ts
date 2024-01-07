export interface IUser {
  email: string;
  username: string;
  password: string;
}

export interface ICreateUser extends IUser {
  confirmPassword: string;
}

export interface IAuthUser extends Omit<IUser, 'password'> {
  token: string;
}

const StepsOptions = [
  'login',
  'main',
  'forgetPassword',
  'createAccount',
] as const;
export type IStepOptions = (typeof StepsOptions)[number];
