import { useEffect, useState } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { IAuthUser } from "@/global/types";
import { set } from "react-hook-form";

export const useUser = () => {
  const [user, setUser] = useState<IAuthUser | undefined>(undefined);
  const { getItem, setItem } = useLocalStorage();

  useEffect(() => {
    getUser();
  }, []);

  const addUser = (user: IAuthUser) => {
    setItem("user", JSON.stringify(user));
  };

  const removeUser = () => {
    setItem("user", "");
  };

  const getUser = () => {
    const user = getItem("user");
    if (user) {
      const authUser = JSON.parse(user);
      setUser(authUser);
    }
  }

  return { user, addUser, removeUser };
};