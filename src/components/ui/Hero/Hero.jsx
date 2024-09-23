import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import HeroButtonCV from "./HeroButtonCV";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <>
      <section id="me" className="px-5 py-10 flex justify-center">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="flex justify-center lg:justify-start items-center order-2 lg:order-1">
            <div className="text-center">
              <HeroTitle />
              <HeroDescription />
              <HeroButtonCV />
            </div>
          </div>
          <HeroImage />
        </div>
      </section>
    </>
  );
};

export default Hero;
