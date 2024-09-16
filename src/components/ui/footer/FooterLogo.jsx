import { Link } from "react-router-dom";
import Logo from "../../../assets/images/logo.png";

const FooterLogo = () => {
  return (
    <div className="flex justify-center items-center mb-6 md:mb-0">
      <Link to="/">
        <div className="w-56">
          <img src={Logo} alt="Main Logo HAC Software" />
        </div>
      </Link>
    </div>
  );
};

export default FooterLogo;
