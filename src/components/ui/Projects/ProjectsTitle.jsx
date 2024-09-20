import { motion } from "framer-motion";

const ProjectsTitle = () => {
  return (
    <motion.h2
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="text-4xl italic font-semibold text-center"
    >
      Proyectos
    </motion.h2>
  );
};

export default ProjectsTitle;
