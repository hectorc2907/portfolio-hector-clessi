import { motion } from "framer-motion";
import InfoTech from "./InfoTech";
import LinkButton from "../../../ui/LinkButton";

const Banner = () => {
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
          Soluciones
        </motion.h2>
        <InfoTech />
        <LinkButton direct="/works" text="Mirar Habilidades!" />
      </div>
    </motion.section>
  );
};

export default Banner;
