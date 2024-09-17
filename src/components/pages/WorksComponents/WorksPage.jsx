import { motion } from "framer-motion";
import CardProjectsAll from "./CardProjectsAll";

const WorksPage = () => {
  return (
    <>
      <div className="flex text-white flex-col items-center">
        <div className="container grid grid-cols-1 gap-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center font-roboto text-5xl pt-10"
          >
            Mi Camino en el Desarrollo
          </motion.h1>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-20 py-10">
              <CardProjectsAll />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorksPage;
