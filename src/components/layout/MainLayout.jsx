import Footer from "../common/Footer";
import Header from "../common/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="ml-auto mr-auto px-5 max-w-[1200px]">{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
