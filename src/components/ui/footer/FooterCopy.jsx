import { motion } from "framer-motion";

const FooterCopy = () => {
  return (
    <div className="bg-[#1E1E1D] text-white ">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="py-6 text-center"
      >
        HAC Servicios &copy; Derechos Reservados
      </motion.p>
    </div>
  );
};

export default FooterCopy;
