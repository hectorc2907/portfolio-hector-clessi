import { Link } from "react-router-dom";
import { FaChildReaching } from "react-icons/fa6";
import { FaReact } from "react-icons/fa6";
import { FaAddressBook } from "react-icons/fa6";

const HeaderButton = () => {
  return (
    <div className="hidden lg:flex justify-around">
      <Link
        to="/about"
        className="text-lg backdrop-blur-3xl hover:text-gray-200 px-2 py-1"
      >
        <div className="flex items-center">
          <FaChildReaching className="mr-2" />
          About Me
        </div>
      </Link>
      <Link
        to="/works"
        className="text-lg backdrop-blur-3xl hover:text-gray-200 px-2 py-1"
      >
        <div className="flex items-center">
          <FaReact className="mr-2" />
          Works
        </div>
      </Link>
      <Link
        to="/contact"
        className="text-lg backdrop-blur-3xl hover:text-gray-200 px-2 py-1"
      >
        <div className="flex items-center">
          <FaAddressBook className="mr-2" />
          Contact
        </div>
      </Link>
    </div>
  );
};

export default HeaderButton;
