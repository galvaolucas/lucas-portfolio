export interface IUser {
  id: string;
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

const SidebarAreaOptions = [
  'personalData',
  'experiences',
  'technologies',
] as const;
export type ISidebarAreaOptions = (typeof SidebarAreaOptions)[number];

export interface ISidebarProps {
  area?: ISidebarAreaOptions;
  setArea?: (area: ISidebarAreaOptions) => void;
}