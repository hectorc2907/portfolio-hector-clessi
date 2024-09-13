import Logo from "../ui/Logo";
import LogoSmall from "../ui/LogoSmall";

import LoginButton from "../ui/LoginButton";
import HeaderButton from "../ui/HeaderButton";

const Header = () => {
  return (
    <header className="backdrop-blur-[3px]">
      <div className="ml-auto mr-auto max-w-[1200px] grid lg:grid-cols-3 md:grid-cols-2 py-2 items-center">
        <div className="ml-5">
          <Logo style={`w-60 hidden lg:block`} />
          <LogoSmall style={`w-12 md:block lg:hidden`} />
        </div>
        <HeaderButton />
        <LoginButton />
      </div>
    </header>
  );
};

export default Header;
