import { createContext, useState, useEffect } from "react";
import {
  registerUser,
  loginUser,
  logoutUser,
  refreshAccessToken,
} from "../services/authService";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const register = async (email, password) => {
    try {
      await registerUser(email, password);
    } catch (error) {
      console.error("Registration failed:", error);
    }
  };

  const login = async (email, password) => {
    try {
      const data = await loginUser(email, password);
      setUser(data.user);
    } catch (error) {
      console.error("Login failed:", error);
      setUser(null);
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const checkAuth = async () => {
    try {
      const data = await refreshAccessToken();
      setUser(data.user);
    } catch {
      setUser(null);
    } finally {
      setUser(null);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, register, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
