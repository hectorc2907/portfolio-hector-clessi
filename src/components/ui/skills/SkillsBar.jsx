import Skills from "./Skills";
import { motion } from "framer-motion";

const SkillsBar = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="bg-black text-white w-full py-12 flex justify-center px-2 xl:px-0"
    >
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="text-center text-4xl italic font-guerrilla"
        >
          Habilidades
        </motion.h2>
        <Skills />
      </div>
    </motion.section>
  );
};

export default SkillsBar;
