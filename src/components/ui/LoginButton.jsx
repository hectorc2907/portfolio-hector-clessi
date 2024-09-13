import { Link } from "react-router-dom";
import { FaArrowRightToBracket } from "react-icons/fa6";

const LoginButton = () => {
  return (
    <div className="mr-5 hidden lg:flex justify-end">
      <Link
        to="/login"
        className="text-lg backdrop-blur-3xl hover:text-gray-200 px-2 py-1"
      >
        <div className="flex items-center">
          <FaArrowRightToBracket className="mr-2" />
          Login
        </div>
      </Link>
    </div>
  );
};

export default LoginButton;
