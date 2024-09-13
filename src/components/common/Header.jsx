import { Link } from "react-router-dom";
import Logo from "../ui/Logo";
import LogoSmall from "../ui/LogoSmall";

const Header = () => {
  return (
    <header className="backdrop-blur-[3px]">
      <div className="ml-auto mr-auto max-w-[1200px] grid grid-cols-3 py-2 items-center">
        <div className="ml-5">
          <Link to="/">
            <Logo style={`w-52 hidden lg:block`} />
          </Link>
          <Link to="/">
            <LogoSmall size={`w-12 md:block lg:hidden`} />
          </Link>
        </div>
        <div className="text-center">botonera</div>
        <div className="mr-5 text-right">punto2</div>
      </div>
    </header>
  );
};

export default Header;
