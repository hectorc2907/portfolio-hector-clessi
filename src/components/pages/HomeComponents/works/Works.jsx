import { motion } from "framer-motion";
import Projects from "./Projects";
import LinkButton from "../../../ui/LinkButton";

const Works = () => {
  return (
    <div className="text-white w-full py-12 flex justify-center px-2 xl:px-0">
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, x: -100 }}
          whileTap={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center text-4xl italic font-guerrilla"
        >
          Proyectos
        </motion.h2>
        <Projects />
        <LinkButton direct="/works" text="Ver Mas Proyectos!" />
      </div>
    </div>
  );
};

export default Works;
