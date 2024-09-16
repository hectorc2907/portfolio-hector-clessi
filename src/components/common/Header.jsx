import { Link } from "react-router-dom";
import Logo from "../ui/header/Logo";
import Menu from "../ui/header/Menu";
import LoginButton from "../ui/header/LoginButton";

const Header = () => {
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-4 md:pt-4">
          <Link to="/">
            <Logo />
          </Link>
          <Menu />
          <LoginButton />
        </div>
      </nav>
    </>
  );
};

export default Header;
