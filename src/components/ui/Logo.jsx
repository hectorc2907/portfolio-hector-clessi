import MainLogo from "./MainLogo";
import SmallLogo from "./SmallLogo";

const Logo = () => {
  return (
    <div>
      <div className="hidden md:flex w-56">
        <MainLogo />
      </div>
      <div className="flex md:hidden w-11">
        <SmallLogo />
      </div>
    </div>
  );
};

export default Logo;
