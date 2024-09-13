import logo from "../../assets/images/logo.png";

const Logo = ({ style }) => {
  return <img className={`${style}`} src={logo} alt="Main Logo" />;
};

export default Logo;
