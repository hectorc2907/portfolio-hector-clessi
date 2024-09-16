import { FaPlusCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CardNewProjects = () => {
  return (
    <Link to="/works">
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="bg-black rounded-xl max-w-[300px] min-h-[500px] flex justify-center items-center cursor-pointer hover:shadow-[0_0_15px_-1px_#ffffff]"
      >
        <div className="text-6xl flex flex-col items-center gap-10">
          <FaPlusCircle />
          <span className="text-2xl text-center">
            Mas Proyectos <br /> en Camino
          </span>
        </div>
      </motion.div>
    </Link>
  );
};

export default CardNewProjects;
