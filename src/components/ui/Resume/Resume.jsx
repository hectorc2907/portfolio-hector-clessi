import { MyEducation } from "../../../mocks/MyEducation";
import { MyExperience } from "../../../mocks/MyExperience";
import { motion } from "framer-motion";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const Resume = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-blue-900 md:bg-white px-5 py-10 flex justify-center text-white"
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-blue-900 md:shadow-md md:shadow-slate-900 container grid grid-cols-1 gap-10 rounded-2xl p-5"
        >
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl italic font-semibold text-center"
          >
            Trayectoria
          </motion.h2>
          <div className="grid grid-cols-1 gap-14">
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
                    <p className="text-center">
                      Duración: {experience.timeline}
                    </p>
                    <p className="text-center py-5">{experience.description}</p>
                    <p>Compañia: {experience.company}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 gap-5">
              <motion.h3
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-center text-2xl italic"
              >
                Formación
              </motion.h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 text-black">
                {[...MyEducation].reverse().map((education, index) => (
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 + 0.2 * index }}
                    className="grid grid-cols-1 bg-white rounded-2xl px-5 shadow-md shadow-slate-900"
                  >
                    <a href={education.link} target="_blank">
                      <p className="text-center text-xl font-semibold">
                        {education.title}
                      </p>
                    </a>
                    <p className="text-slate-500 flex justify-center items-center">
                      <MdKeyboardDoubleArrowUp /> <span>Certificado</span>
                    </p>
                    <p className="text-center py-5">{education.description}</p>
                    <p>Institución: {education.institution}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </>
  );
};

export default Resume;
