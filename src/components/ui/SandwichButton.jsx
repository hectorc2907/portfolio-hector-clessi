import { useState } from "react";
import { FaAlignJustify } from "react-icons/fa6";
import MenuResponsive from "./MenuResponsive";

const SandwichButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenSideBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="lg:hidden flex justify-end mr-5">
        <button onClick={handleOpenSideBar}>
          <FaAlignJustify className={`${isOpen ? "hidden" : ""} text-4xl`} />
        </button>
      </div>
      {isOpen && <MenuResponsive isOpen={isOpen} setIsOpen={setIsOpen} />}
    </>
  );
};

export default SandwichButton;
