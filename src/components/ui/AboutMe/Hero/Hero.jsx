import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import HeroButtonCV from "./HeroButtonCV";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <>
      <section className="px-5 py-10 flex justify-center">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Hero Info */}
          <div className="flex justify-center lg:justify-start items-center order-2 lg:order-1">
            {/* Hero Title */}
            <div className="text-center">
              <HeroTitle />
              {/* Hero Description */}
              <HeroDescription />
              {/* Hero Button CV */}
              <HeroButtonCV />
            </div>
          </div>
          {/* Hero Image */}
          <HeroImage />
        </div>
      </section>
    </>
  );
};

export default Hero;
