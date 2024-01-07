import { useContext } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { UserContext } from "@/app/contexts/userContext";
import { IAuthUser, IUser } from "@/global/types";

export const useUser = () => {
  const userContext = useContext(UserContext);
  const { setItem } = useLocalStorage();

  const addUser = (user: IAuthUser) => {
    userContext?.setUser(user);
    setItem("user", JSON.stringify(user));
  };

  const removeUser = () => {
    userContext?.setUser(undefined);
    setItem("user", "");
  };

  return { user: userContext?.user, addUser, removeUser };
};