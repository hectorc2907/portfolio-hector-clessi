import { useState } from "react";
import { WorksExperience } from "../../../mocks/WorkExperience";

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
          <div
            key={works.id}
            onClick={() => toggleCard(works.id)}
            className="bg-black rounded-2xl cursor-pointer hover:shadow-[0_0_15px_-1px_#ffffff] p-5 overflow-hidden"
          >
            <div className="flex flex-col items-center gap-5">
              <h3>{works.position}</h3>
              <div>
                <p>Empresa/Institución: {works.company}</p>
                <p>Duración: {works.duration}</p>
              </div>
              <div
                className={`transition-all duration-300 ${
                  expandedCards[works.id] ? "max-h-full" : "max-h-20"
                } overflow-hidden`}
              >
                <div className="text-center">
                  Description: {works.description}
                </div>
                <div className="mt-2 flex flex-col items-center">
                  <strong>Logros:</strong>
                  {works.achievements.map((achievement, index) => (
                    <div key={index} className="text-center">{achievement}</div>
                  ))}
                </div>
                <div className="mt-2 flex flex-col items-center">
                  <strong>Habilidades:</strong>
                  {works.skills.map((skill, index) => (
                    <div key={index}>{skill}</div>
                  ))}
                </div>
              </div>
              <button
                className="mt-4 text-sm text-blue-500 hover:underline"
                onClick={() => toggleCard(works.id)}
              >
                {expandedCards[works.id] ? "Mostrar menos" : "Mostrar más"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CardExperience;
