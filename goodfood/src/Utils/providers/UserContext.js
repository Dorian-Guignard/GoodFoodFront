import React, { createContext, useEffect, useState } from "react";


export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
// ici vous pouvez mettre ce que vous voulez votre user, votre token, etc...
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) {
      setUser(storedUser);
      setIsLoggedIn(true);
    }
  }, []);

    const verifiedUser=()=>{
      const storedUser = JSON.parse(localStorage.getItem("user"));
      return storedUser ? true : false;
    }

    const updateUser = (newUser) => {
      setUser(newUser);
      localStorage.setItem("user", JSON.stringify(newUser));
    };

    const logOut = () => {
      setUser(null);
      setIsLoggedIn(false);
      localStorage.removeItem("user");
    };

  return (
    <UserContext.Provider value={{ user, updateUser,isLoggedIn, setIsLoggedIn, logOut, verifiedUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;