import React, { createContext, useContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";
import { AuthContextType, DecodedTokenUser } from "../../types/authTypes";
import { api } from "../../constants/api";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<DecodedTokenUser | null>(null);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const sessionToken = Cookies.get("sessionToken");

    if (sessionToken) {
      try {
        const decodedUser = jwtDecode<DecodedTokenUser>(sessionToken);
        setUser(decodedUser);
        setToken(sessionToken);
        api.defaults.headers.Authorization = `Bearer ${sessionToken}`;
      } catch (error) {
        logout();
      }
    }
  }, []);

  function logout() {
    Cookies.remove("sessionToken");
    setUser(null);
    setToken(null);
    delete api.defaults.headers.Authorization;
  }

  return (
    <AuthContext.Provider
      value={{ user, setUser, token, setToken, handleLogout: logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};
