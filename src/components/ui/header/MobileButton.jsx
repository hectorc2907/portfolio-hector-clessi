import { RiMenuAddFill, RiMenuFill } from "react-icons/ri";

const MobileButton = ({ isOpen, setIsOpen }) => {
  return (
    <div className="md:hidden text-4xl" onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? <RiMenuFill /> : <RiMenuAddFill />}
    </div>
  );
};

export default MobileButton;
