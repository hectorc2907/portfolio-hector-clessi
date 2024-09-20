import { motion } from "framer-motion";
import { getActualYear } from "../../utils/dateUtils";
import Logo from "../../assets/images/logo.png";

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
          {/* Footer Nav Section */}
          <div className="flex">
            {/* Footer Logo */}
            <motion.a
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              href="/"
            >
              <img src={Logo} alt="Main Logo of HAC Service" className="w-64" />
            </motion.a>
          </div>
          {/* Copyright Section */}
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
