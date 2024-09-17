import { motion } from "framer-motion";
import CardProjectsAll from "./CardProjectsAll";
import { useState } from "react";
import LinkButton from "../../ui/LinkButton";
import RedirectButton from "../../ui/RedirectButton";

const WorksPage = () => {
  const [filterText, setFilterText] = useState("");

  const handleInputChange = (event) => {
    setFilterText(event.target.value);
  };
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
          <div className="flex flex-col justify-center items-center gap-5">
            <motion.h2
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-3xl italic font-guerrilla"
            >
              Proyectos
            </motion.h2>
            <motion.input
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              type="text"
              value={filterText}
              onChange={handleInputChange}
              placeholder="Buscar por tecnologia"
              className="text-black p-2 rounded-lg"
            />
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="py-5"
            >
              <CardProjectsAll filterText={filterText} />
            </motion.div>
          </div>
          <div className="flex flex-col gap-5">
            <p className="text-center">
              *Por motivos de rendimiento solo se muestran 8 proyectos maximo,
              puedes buscar por tecnologias o mirar mi{" "}
              <span className="font-bold">GitHub</span>
            </p>
            <RedirectButton
              direct="https://github.com/hectorc2907?tab=repositories"
              text="GitHub"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorksPage;
