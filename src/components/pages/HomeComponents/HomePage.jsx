import Hero from "./hero/Hero";
import SkillsBar from "./skills/SkillsBar";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="container">
          <Hero />
        </div>
        <SkillsBar />
      </div>
    </>
  );
};

export default HomePage;
