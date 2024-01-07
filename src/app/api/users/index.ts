import { IUser } from '@/global/types';

interface IUserRestClient {
  // eslint-disable-next-line no-unused-vars
  createUser: (user: IUser) => Promise<void>;
}

export class UserRestClient implements IUserRestClient {
  baseUrl: string;
  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL ?? '';
  }

  createUser = async ({
    email,
    username,
    password,
  }: IUser): Promise<void> => {
    const body = {
      email,
      username,
      password,
    };
    try {
      await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify(body),
      });
    } catch (err) {
      console.error(`error: ${err}`);
    }
  };
}
