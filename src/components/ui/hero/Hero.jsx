import Info from "./Info";
import ProfileImage from "./ProfileImage";

const Hero = () => {
  return (
    <section>
      <div className="container grid grid-cols-1 lg:grid-cols-2 my-16 relative px-2">
        <ProfileImage />
        <Info />
      </div>
    </section>
  );
};

export default Hero;
