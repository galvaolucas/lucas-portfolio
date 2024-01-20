import { IAuthUser, IUser } from "@/global/types";
import * as jwt from "jsonwebtoken";
import router from "next/router";

interface ILoginRestClient {
  signIn: (user: Partial<IUser>) => Promise<{ access_token: string} | undefined>;
}

export class LoginRestClient implements ILoginRestClient {
  baseUrl: string;
  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL ?? '';
  }

  signIn = async (user: Partial<IUser>): Promise<{ access_token: string} | undefined> => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type':'application/json' },
        body: JSON.stringify(user),
      });
      if (!response.ok) throw new Error('Ocorreu um erro durante o login.');
      return await response.json();
    } catch (err) {
      console.error(`error: ${err}`);
    }
  };

  validateTokenAndReturnUserData = async (token: string): Promise<IAuthUser> => {
    const user = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/login?token=${token}`, {
      method: 'POST',
    });
    if (!user?.ok) {
      router.push('/');
    };
    return await user.json();
  }
}