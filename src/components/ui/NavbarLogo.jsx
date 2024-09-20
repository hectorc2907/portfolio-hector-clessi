import { motion } from "framer-motion";
import Logo from "../../assets/images/logo.png";
import LogoSmall from "../../assets/images/logoSmall.png";

const NavbarLogo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <a href="/" className="hidden lg:block">
        <img src={Logo} alt="" className="w-64" />
      </a>
      <a href="/" className="lg:hidden">
        <img src={LogoSmall} alt="" className="w-[51px]" />
      </a>
    </motion.div>
  );
};

export default NavbarLogo;
