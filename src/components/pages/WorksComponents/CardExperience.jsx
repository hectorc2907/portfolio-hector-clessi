import { useState } from "react";
import { WorksExperience } from "../../../mocks/WorkExperience";
import { motion } from "framer-motion";

const CardExperience = () => {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (id) => {
    setExpandedCards((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {[...WorksExperience].reverse().map((works) => (
          <motion.div
            key={works.id}
            className="bg-black rounded-2xl cursor-pointer hover:shadow-[0_0_15px_-1px_#ffffff] p-5 overflow-hidden"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => toggleCard(works.id)}
          >
            <div className="flex flex-col items-center gap-5">
              <h3>{works.position}</h3>
              <div>
                <p>Empresa/Institución: {works.company}</p>
                <p>Duración: {works.duration}</p>
              </div>
              <motion.div
                className="overflow-hidden"
                animate={{ height: expandedCards[works.id] ? "auto" : 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center">
                  Description: {works.description}
                </div>
                <div className="mt-2 flex flex-col items-center">
                  <strong>Logros:</strong>
                  {works.achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      {achievement}
                    </div>
                  ))}
                </div>
                <div className="mt-2 flex flex-col items-center">
                  <strong>Habilidades:</strong>
                  {works.skills.map((skill, index) => (
                    <div key={index}>{skill}</div>
                  ))}
                </div>
              </motion.div>
              <p className="mt-4 text-sm hover:underline">
                <span className="font-bold">
                  {expandedCards[works.id]
                    ? "Click para mostrar menos"
                    : "Click para mostrar más"}
                </span>
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default CardExperience;
