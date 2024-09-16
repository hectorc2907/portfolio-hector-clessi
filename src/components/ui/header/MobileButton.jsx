import { RiMenuAddFill, RiMenuFill } from "react-icons/ri";

const MobileButton = ({ isOpen, setIsOpen }) => {
  return (
    <div className="lg:hidden text-4xl mr-5 text-white" onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? <RiMenuFill /> : <RiMenuAddFill />}
    </div>
  );
};

export default MobileButton;
