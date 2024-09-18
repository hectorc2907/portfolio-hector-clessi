import { motion } from "framer-motion";
import CardProjectsAll from "./CardProjectsAll";
import { useState } from "react";
import RedirectButton from "../../ui/RedirectButton";
import SkillsBar from "../../ui/skills/SkillsBar";
import Meta from "../../ui/Meta";
import CardExperience from "./CardExperience";

const WorksPage = () => {
  const [filterText, setFilterText] = useState("");

  const handleInputChange = (event) => {
    setFilterText(event.target.value);
  };
  return (
    <>
      <Meta title="Proyectos" />
      <div className="flex text-white flex-col items-center gap-10">
        <div className="container grid grid-cols-1 gap-5">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center font-roboto text-5xl pt-10"
          >
            Mi Camino en el Desarrollo
          </motion.h1>
          <div>
            <div className="flex flex-col justify-center items-center gap-5">
              <motion.h2
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-4xl italic font-guerrilla"
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
            <motion.div className="flex flex-col gap-5">
              <motion.p
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="text-center"
              >
                *Por motivos de rendimiento solo se muestran los ultimos 4
                proyectos, puedes buscar por tecnologias o mirar mi{" "}
                <span className="font-bold">GitHub</span>
              </motion.p>
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
              >
                <RedirectButton
                  direct="https://github.com/hectorc2907?tab=repositories"
                  text="GitHub"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
        <SkillsBar />
        <div className="container grid grid-cols-1 gap-5">
          <motion.h2
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center font-guerrilla text-4xl italic py-3"
          >
            Experiencia Profesional
          </motion.h2>
          <div>
            <CardExperience />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorksPage;
