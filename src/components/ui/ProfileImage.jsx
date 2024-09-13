import profile from "../../assets/images/profile.jpg";

const Logo = ({ size }) => {
  return <img className={`${size}`} src={profile} alt="Profile Image" />;
};

export default Logo;
