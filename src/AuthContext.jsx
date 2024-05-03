import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(
    sessionStorage.getItem("isLogged") === "true"
  );
  const [userData, setUserData] = useState(
    JSON.parse(sessionStorage.getItem("userData")) || null
  );

  useEffect(() => {
    sessionStorage.setItem("isLogged", isLogged);
  }, [isLogged]);

  useEffect(() => {
    if (userData) {
      sessionStorage.setItem("userData", JSON.stringify(userData));
    } else {
      sessionStorage.removeItem("userData");
    }
  }, [userData]);

  return (
    <AuthContext.Provider
      value={{ isLogged, setIsLogged, userData, setUserData }}
    >
      {children}
    </AuthContext.Provider>
  );
};
