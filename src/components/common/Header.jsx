import Logo from "../ui/header/Logo";

const Header = () => {
  return (
    <>
      <nav>
        <div className="container flex justify-between items-center py-4 md:pt-4">
          <Logo />
          <div className="mr-5">punto2</div>
        </div>
      </nav>
    </>
  );
};

export default Header;
