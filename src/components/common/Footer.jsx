import { motion } from "framer-motion";
import { getActualYear } from "../../utils/dateUtils";

const Footer = () => {
  return (
    <>
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-zinc-800 text-white p-5 flex justify-center"
      >
        <div className="container flex flex-col">
          <div className="flex">a</div>
          <div className="pt-5 text-center flex flex-col">
            <p>HAC Software {getActualYear()}</p>
            <p>&copy; Todos los Derechos Reservados</p>
          </div>
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
