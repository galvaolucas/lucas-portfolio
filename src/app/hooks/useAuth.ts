import { useEffect } from "react";
import { useUser } from "./useUser";
import { useLocalStorage } from "./useLocalStorage";
import { IAuthUser } from "@/global/types";
import { useRouter } from "next/navigation";

export const useAuth = () => {
  const { user, addUser, removeUser } = useUser();
  const { getItem } = useLocalStorage();
  const router = useRouter();

  useEffect(() => {
    const user = getItem("user");
    
    if (user) {
      const parsedUser = JSON.parse(user);
      addUser(parsedUser);
      validateToken(parsedUser.token);
    }
  }, []);

  const login = (user: IAuthUser) => {
    addUser(user);
  };

  const logout = () => {
    removeUser();
  };

  const validateToken = async (token: string) => {
    const isValid = await fetch(`${process.env.NEXT_PUBLIC_LOCAL_API_URL}/login?token=${token}`, {
      method: 'POST',
    });
    if (!isValid.ok) {
      router.push('/');
    };
    const response = await isValid.json();
    if (!response.valid) {
      router.push('/');
    }
  }

  return { user, login, logout };
};