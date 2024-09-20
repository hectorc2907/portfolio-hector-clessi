import { motion } from "framer-motion";

const SkillsTitle = () => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="text-4xl italic font-semibold text-center"
    >
      Habilidades
    </motion.h2>
  );
};

export default SkillsTitle;
