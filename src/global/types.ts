export interface IUser {
  id: string;
  sub?: string;
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

export interface IExperience {
  _id?: string;
  role: string;
  company: string;
  attributions: string;
  technologies: string[];
  startDate: string;
  endDate: string;
  currentJob: boolean;
  user: string | IAuthUser;
}

export interface IProjects {
  _id?: string;
  images: string[];
  description: string;
  technologies: string[];
  link: string;
  user: string | IAuthUser;
}

export interface IExperienceListItemProps {
  children: React.ReactNode | React.ReactElement;
  onClick?: () => void;
}