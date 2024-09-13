import { Link } from "react-router-dom";
import logoSmall from "../../assets/images/logoSmall.png";

const Logo = ({ style }) => {
  return (
    <Link to="/">
      <img className={`${style}`} src={logoSmall} alt="Small Logo" />
    </Link>
  );
};

export default Logo;
