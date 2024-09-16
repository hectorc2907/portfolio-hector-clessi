import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../ui/header/Logo";
import Menu from "../ui/header/Menu";
import LoginButton from "../ui/header/LoginButton";
import MobileButton from "../ui/header/MobileButton";
import ResponsiveMenu from "../ui/header/ResponsiveMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="flex justify-center">
        <div className="container flex justify-between items-center py-4 md:pt-4">
          <Link to="/">
            <Logo isOpen={isOpen} setIsOpen={setIsOpen} />
          </Link>
          <Menu />
          <LoginButton />
          <MobileButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </nav>
      <ResponsiveMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
