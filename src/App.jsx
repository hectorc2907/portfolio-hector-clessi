import { BrowserRouter as Router } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import PublicRoutes from "./routes/PublicRoutes";

const App = () => {
  return (
    <Router>
      <MainLayout>
        <PublicRoutes />
      </MainLayout>
    </Router>
  );
};

export default App;
