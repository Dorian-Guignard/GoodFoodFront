import React, { createContext, useState } from "react";


export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
// ici vous pouvez mettre ce que vous voulez votre user, votre token, etc...
  const [user, setUser] = useState(null);

  const updateUser = (newUser) => {
    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;