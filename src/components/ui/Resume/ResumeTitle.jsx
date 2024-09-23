import { motion } from "framer-motion";

const ResumeTitle = () => {
  return (
    <motion.h2
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="text-4xl italic font-semibold text-center"
    >
      Trayectoria
    </motion.h2>
  );
};

export default ResumeTitle;
