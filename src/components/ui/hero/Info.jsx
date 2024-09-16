import { motion } from "framer-motion";
import { FadeLeft } from "../../../utils/Animations";

const Info = () => {
  return (
    <div className="flex flex-col justify-center items-center md:mt-5 lg:mt-0">
      <motion.h1
        variants={FadeLeft(0.5)}
        initial="hidden"
        animate="visible"
        className="text-5xl lg:text-6xl font-bold leading-relaxed xl:leading-loose font-guerrilla italic"
      >
        Hector Clessi
      </motion.h1>
      <motion.h2
        variants={FadeLeft(0.8)}
        initial="hidden"
        animate="visible"
        className="text-2xl tracking-wide pb-5 font-semibold text-blue-600 font-guerrilla italic"
      >
        FullStack Developer
      </motion.h2>
      <motion.p
        variants={FadeLeft(0.8)}
        initial="hidden"
        animate="visible"
        className="text-gray-700 md:w-96 text-center"
      >
        ¡Hola! Soy un desarrollador FullStack con especialización en el Stack
        MERN, mi enfoque se centra en la creación de soluciones elegantes y
        eficientes que combinen una sólida arquitectura Backend con una
        experiencia de usuario atractiva en el Frontend. Me encanta enfrentar
        nuevos desafíos y aprender constantemente nuevas tecnologías para
        mejorar mis habilidades y mantenerme actualizado en un mundo tecnológico
        en constante evolución.
      </motion.p>
    </div>
  );
};

export default Info;
