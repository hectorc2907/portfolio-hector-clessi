import { motion } from "framer-motion";

const HeroTitle = () => {
  return (
    <div className="text-4xl font-semibold">
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        ¡Hola!,
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
      >
        Soy <span className="text-blue-700">Hector Clessi</span>
      </motion.p>
      <motion.p
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.9 }}
      >
        Desarrollador Full-Stack
      </motion.p>
    </div>
  );
};

export default HeroTitle;
