import FirstSection from "./card/FirstSection";

const AboutMePage = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="container grid grid-cols-1 gap-10">
          <h1 className="text-center text-white font-roboto text-5xl pt-10">
            ¿Quien Soy?
          </h1>
          <div>
            <FirstSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMePage;
