import { Routes, Route } from "react-router-dom";
import HomePage from "../components/pages/HomeComponents/HomePage";
import LoginPage from "../components/pages/LoginComponents/LoginPage";
import AboutMePage from "../components/pages/AboutComponents/AboutMePage";
import WorksPage from "../components/pages/WorksComponents/WorksPage";
import ContactPage from "../components/pages/ContactComponents/ContactPage";
import Error404 from "../components/pages/Error404Components/Error404";
import Project from "../components/pages/ProjectComponents/Project";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/about" element={<AboutMePage />} />
      <Route path="/works" element={<WorksPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/project/:id" element={<Project />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
};

export default PublicRoutes;
