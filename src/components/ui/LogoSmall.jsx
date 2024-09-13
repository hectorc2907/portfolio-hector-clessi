import logoSmall from "../../assets/images/logoSmall.png";

const Logo = ({ size }) => {
  return <img className={`${size}`} src={logoSmall} alt="Small Logo" />;
};

export default Logo;
