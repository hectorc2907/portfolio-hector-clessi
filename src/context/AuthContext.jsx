import { createContext, useState, useEffect } from "react";
import {
  registerUser,
  loginUser,
  logoutUser,
  checkAuth as checkAuthService,
  refreshAccessToken,
} from "../services/authService";
import { jwtDecode } from "jwt-decode";

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
      const { accessToken } = data;

      document.cookie = `accessToken=${accessToken}; path=/; secure; HttpOnly;`;

      const decodedToken = jwtDecode(accessToken);
      setUser(decodedToken);
      console.log(data.userId);
    } catch (error) {
      console.error("Login failed:", error);
      setUser(null);
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
      document.cookie = `accessToken=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
      setUser(null);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const refreshToken = async () => {
    try {
      const { data } = await refreshAccessToken();

      if (data.accessToken) {
        setUser(jwtDecode(data.accessToken));
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Failed to refresh token:", error);
      setUser(null);
    }
  };

  const checkAuth = async () => {
    try {
      const { data } = await checkAuthService();

      if (data.authenticated) {
        setUser(data.user);
      } else {
        await refreshToken();
      }
    } catch (error) {
      console.error("Authentication check failed:", error);
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider value={{ user, register, login, logout, loading }}>
      {!loading ? children : <div>Loading...</div>}
    </AuthContext.Provider>
  );
};

export default AuthContext;
