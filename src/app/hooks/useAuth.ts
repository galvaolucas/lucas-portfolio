import { useEffect } from "react";
import { useUser } from "./useUser";
import { useLocalStorage } from "./useLocalStorage";
import { IAuthUser } from "@/global/types";

export const useAuth = () => {
  const { addUser, removeUser } = useUser();

  const login = (user: IAuthUser) => {
    addUser(user);
  };

  const logout = () => {
    removeUser();
  };

  return { login, logout };
};