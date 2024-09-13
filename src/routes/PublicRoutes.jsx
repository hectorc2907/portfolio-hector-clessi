import { Routes, Route } from "react-router-dom";
import HomePage from "../components/pages/HomeComponents/HomePage";
import LoginPage from "../components/pages/LoginComponents/LoginPage";
import AboutMePage from "../components/pages/AboutComponents/AboutMePage";
import WorksPage from "../components/pages/WorksComponents/WorksPage";
import ContactPage from "../components/pages/ContactComponents/ContactPage";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/about" element={<AboutMePage />} />
      <Route path="/works" element={<WorksPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};

export default PublicRoutes;
