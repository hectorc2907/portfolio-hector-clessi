import { motion } from "framer-motion";
import { calculateAge } from "../../../utils/dateUtils";

const HeroDescription = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1.1 }}
      className="text-xl text-center text-slate-700 mt-4"
    >
      <p>
        Con {calculateAge("2023-08-14")}{" "}
        {calculateAge("2023-08-14") > 1
          ? "años de experiencia"
          : "año de experiencia"}
        , me especializo en crear soluciones atractivas y eficientes en el{" "}
        <span className="font-bold">Front-End</span> y{" "}
        <span className="font-bold">Back-End</span>, además de trabajar con
        bases de datos <span className="font-bold">NoSQL</span> y{" "}
        <span className="font-bold">SQL</span>.
      </p>
    </motion.div>
  );
};

export default HeroDescription;
