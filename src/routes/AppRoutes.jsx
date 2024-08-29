import { Route, Routes } from "react-router-dom";
import HomePage from "../components/pages/HomePage";
import LoginForm from "../components/pages/LoginForm";
import RegisterForm from "../components/pages/RegisterForm";
import PrivateRoute from "./PrivateRoute";
import AdminDashboard from "../components/admin/AdminDashboard";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/register" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />
      <Route
        path="/admin"
        element={
          <PrivateRoute>
            <AdminDashboard />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
