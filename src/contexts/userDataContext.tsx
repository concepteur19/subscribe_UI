import React, { createContext } from "react";
import User from "../models/User.model";

interface Props {
  children: React.ReactNode;
}

const UserContext = createContext<User | undefined>(
  undefined
);

export const UserProvider: React.FC<Props> = ({ children }) => {
    const userStringify = localStorage.getItem("user");
    const user: User = JSON.parse(userStringify!);

  const contextValue: User | undefined = user

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
