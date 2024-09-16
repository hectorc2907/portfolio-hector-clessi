import Hero from "./hero/Hero";
import SkillsBar from "./skills/SkillsBar";
import Works from "./works/Works";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="container">
          <Hero />
        </div>
        <SkillsBar />
        <Works />
      </div>
    </>
  );
};

export default HomePage;
