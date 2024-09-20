import { motion } from "framer-motion";
import { getActualYear } from "../../utils/dateUtils";

const FooterCopyright = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="pt-5 text-center flex flex-col"
    >
      <p>HAC Software {getActualYear()}</p>
      <p>&copy; Todos los Derechos Reservados</p>
    </motion.div>
  );
};

export default FooterCopyright;
