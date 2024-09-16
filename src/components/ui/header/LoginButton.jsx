import { Link } from "react-router-dom";

const LoginButton = () => {
  return (
    <Link to="/login" className="hidden md:block">
      <div className="flex justify-center mr-5">
        <button className="primary-btn">Login</button>
      </div>
    </Link>
  );
};

export default LoginButton;
