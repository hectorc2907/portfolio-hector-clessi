import MainLogo from "./MainLogo";
import SmallLogo from "./SmallLogo";

const Logo = ({ isOpen, setIsOpen }) => {
  return (
    <div>
      <div className="hidden md:flex w-56">
        <MainLogo />
      </div>
      <div
        className="flex md:hidden w-11 ml-5"
        onClick={() => setIsOpen(!isOpen)}
      >
        <SmallLogo />
      </div>
    </div>
  );
};

export default Logo;
