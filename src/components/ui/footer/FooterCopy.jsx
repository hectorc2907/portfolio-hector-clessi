import { motion } from "framer-motion";

const FooterCopy = () => {
  return (
    <div className="bg-blue-900 text-white ">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="py-6 text-center"
      >
        HAC Servicios &copy; Derechos Reservados
      </motion.p>
    </div>
  );
};

export default FooterCopy;
