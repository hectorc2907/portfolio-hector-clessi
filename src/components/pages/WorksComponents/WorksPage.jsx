import { motion } from "framer-motion";

const WorksPage = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="container grid grid-cols-1 gap-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center text-white font-roboto text-5xl pt-10"
          >
            Mi Camino en el Desarrollo
          </motion.h1>
        </div>
      </div>
    </>
  );
};

export default WorksPage;
