import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Logo = ({ style }) => {
  return (
    <Link to="/">
      <img className={`${style}`} src={logo} alt="Main Logo" />
    </Link>
  );
};

export default Logo;
