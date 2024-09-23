import {motion} from "framer-motion"
import { MyExperience } from "../../../mocks/MyExperience";

const ResumeExperience = () => {
  return (
    <div className="grid grid-cols-1 gap-5">
      <motion.h3
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="text-center text-2xl italic"
      >
        Experiencia Profesional
      </motion.h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 text-black">
        {[...MyExperience].reverse().map((experience, index) => (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 + 0.2 * index }}
            className="grid grid-cols-1 bg-white rounded-2xl px-5 shadow-md shadow-slate-900"
          >
            <p className="text-center text-xl font-semibold">
              {experience.position}
            </p>
            <p className="text-center">Duración: {experience.timeline}</p>
            <p className="text-center py-5">{experience.description}</p>
            <p>Compañia: {experience.company}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ResumeExperience;
