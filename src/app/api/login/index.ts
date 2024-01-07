import { IAuthUser, IUser } from "@/global/types";
import * as jwt from "jsonwebtoken";

interface ILoginRestClient {
  // eslint-disable-next-line no-unused-vars
  signIn: (user: Partial<IUser>) => Promise<IAuthUser | undefined>;
}

export class LoginRestClient implements ILoginRestClient {
  baseUrl: string;
  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL ?? '';
  }

  signIn = async (user: Partial<IUser>): Promise<IAuthUser | undefined> => {
    try {
      const userData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify(user),
      });
      if (!userData.ok) throw new Error('Ocorreu um erro durante o login.');
      return userData.json();
    } catch (err) {
      console.error(`error: ${err}`);
    }
  };

  verifyToken = async (token: string): Promise<boolean> => {
    const decode = jwt.verify(token, process.env.NEXT_PUBLIC_JWT_PUBLIC_KEY ?? '');
      if (decode) {
        return true;
      }
      return false;
  }
}