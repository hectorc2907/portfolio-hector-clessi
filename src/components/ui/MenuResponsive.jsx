import { FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";

const MenuResponsive = ({ isOpen, setIsOpen }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-full bg-slate-700 w-80 transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out z-50 min-h-screen flex flex-col overflow-hidden`}
    >
      <div className="flex justify-between items-center p-4">
        <h2 className="text-2xl">Menu</h2>
        <button onClick={() => setIsOpen(false)}>
          <FaX className="text-4xl" />
        </button>
      </div>
      <div className="flex-grow flex flex-col">
        <Link
          to="/about"
          className="p-4 hover:bg-slate-800 text-center"
          onClick={() => setIsOpen(false)}
        >
          About Me
        </Link>
        <Link
          to="/works"
          className="p-4 hover:bg-slate-800 text-center"
          onClick={() => setIsOpen(false)}
        >
          Works
        </Link>
        <Link
          to="/contact"
          className="p-4 hover:bg-slate-800 text-center"
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>
      <div className="p-4 hover:bg-slate-800 text-center" onClick={() => setIsOpen(false)}>
        <Link to="/login" className="">
          Login
        </Link>
      </div>
    </div>
  );
};

export default MenuResponsive;
