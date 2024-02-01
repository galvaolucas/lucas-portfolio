import { useEffect } from "react";
import { useUser } from "./useUser";
import { IAuthUser } from "@/global/types";
import { setHeaders } from "@/utils/setHeaders";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const { addUser, removeUser } = useUser();
  const router = useRouter()

  const validateAuthToken = async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/auth/status`, {
      headers: setHeaders(),
      method: 'GET',
    })
    const data = await response.json();
    if (!data.status) {
      router.push('/')
    }
  }

  useEffect(() => {
    validateAuthToken();
  }, []);

  const login = (user: IAuthUser) => {
    addUser(user);
  };

  const logout = () => {
    removeUser();
  };

  return { login, logout };
};