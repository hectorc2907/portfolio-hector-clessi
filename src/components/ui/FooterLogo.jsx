import { motion } from "framer-motion";
import Logo from "../../assets/images/logo.png"

const FooterLogo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="flex items-center"
    >
      <a href="/">
        <img src={Logo} alt="Main Logo of HAC Service" className="w-64" />
      </a>
    </motion.div>
  );
};

export default FooterLogo;
