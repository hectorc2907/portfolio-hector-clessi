import { FaArrowUpFromBracket } from "react-icons/fa6";
import { motion } from "framer-motion";

const NavbarButtonResponsive = ({
  menuResponsiveActive,
  buttonMenuActivate,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="lg:hidden"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: menuResponsiveActive ? 0 : -540 }}
        transition={{ duration: 0.5 }}
        className="text-white text-3xl font-semibold rotate-180"
      >
        <FaArrowUpFromBracket onClick={() => buttonMenuActivate()} />
      </motion.div>
    </motion.div>
  );
};

export default NavbarButtonResponsive;
