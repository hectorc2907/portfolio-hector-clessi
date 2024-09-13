import logo from "../../assets/images/logo.png";

const Logo = ({ size }) => {
  return <img className={`${size}`} src={logo} alt="Main Logo" />;
};

export default Logo;
