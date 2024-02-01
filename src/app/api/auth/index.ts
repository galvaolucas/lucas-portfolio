import { IAuthUser, IUser } from "@/global/types";
import router from "next/router";

interface IAuthRestClient {
  validateToken: (token: string) => Promise<{ access_token: string} | undefined>;
}

export class AuthRestClient implements IAuthRestClient {
  baseUrl: string;
  constructor() {
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL ?? '';
  }

  validateToken = async (token: string): Promise<{ access_token: string}> => {
    const user = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/login?token=${token}`, {
      method: 'POST',
    });
    if (!user?.ok) {
      router.push('/');
    };
    return await user.json();
  }
}