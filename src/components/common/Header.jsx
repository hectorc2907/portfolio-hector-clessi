import { Link } from "react-router-dom";
import Logo from "../ui/header/Logo";
import Menu from "../ui/header/Menu";

const Header = () => {
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-4 md:pt-4">
          <Link to="/">
            <Logo />
          </Link>
          <Menu />
        </div>
      </nav>
    </>
  );
};

export default Header;
