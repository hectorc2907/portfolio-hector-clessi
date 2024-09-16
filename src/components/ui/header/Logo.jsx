import { Link } from "react-router-dom";
import MainLogo from "./MainLogo";
import SmallLogo from "./SmallLogo";

const Logo = ({ setIsOpen }) => {
  return (
    <Link to="/">
      <div className="hidden md:flex w-56 ml-5">
        <MainLogo />
      </div>
      <div
        className="flex md:hidden w-11 ml-5"
        onClick={() => setIsOpen(false)}
      >
        <SmallLogo />
      </div>
    </Link>
  );
};

export default Logo;
