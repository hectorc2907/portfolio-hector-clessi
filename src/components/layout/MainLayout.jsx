import Footer from "../common/Footer";
import Header from "../common/Header";

const MainLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow ml-auto mr-auto px-5 max-w-[1200px]">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
