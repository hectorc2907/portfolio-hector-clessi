import Meta from "../../ui/Meta";
import Banner from "./banner/Banner";
import Hero from "./hero/Hero";
import Works from "./works/Works";

const HomePage = () => {
  return (
    <>
      <Meta title="Home" />
      <div className="flex flex-col items-center">
        <div className="container">
          <Hero />
        </div>
        <Banner />
        <Works />
      </div>
    </>
  );
};

export default HomePage;
