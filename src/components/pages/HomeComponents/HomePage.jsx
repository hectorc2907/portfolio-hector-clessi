import Hero from "./hero/Hero";
import Works from "./works/Works";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="container">
          <Hero />
        </div>
        <Works />
      </div>
    </>
  );
};

export default HomePage;
