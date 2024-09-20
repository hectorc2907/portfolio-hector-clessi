import { motion } from "framer-motion";
import { TechIcons } from "../../../utils/techIcons";

const ProjectsButtonGH = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1.3 }}
      className="flex justify-center mt-4"
    >
      <a href="https://github.com/hectorc2907?tab=repositories" target="_blank">
        <div className="w-[250px] py-3 border shadow-sm hover:shadow-md hover:shadow-slate-300 flex justify-center items-center gap-2 text-xl">
          <p>Visitar GH </p>
          <span>{TechIcons("GitHub")}</span>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectsButtonGH;
