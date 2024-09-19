import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PageNotFound from "../pages/PageNotFound";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" exact element={<HomePage />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};

export default PublicRoutes;
