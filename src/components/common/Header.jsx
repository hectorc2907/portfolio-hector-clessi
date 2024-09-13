import Logo from "../ui/Logo";

const Header = () => {
  return (
    <header>
      <div className="ml-auto mr-auto max-w-[1200px] flex justify-between py-5">
        <div className="ml-5">
          <Logo size={`w-16`} />
        </div>
        <div className="mr-5">punto2</div>
      </div>
    </header>
  );
};

export default Header;
