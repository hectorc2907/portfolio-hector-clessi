import { MyEducation } from "../../../mocks/MyEducation";
import { MyExperience } from "../../../mocks/MyExperience";
import { motion } from "framer-motion";

import ResumeContainer from "./ResumeContainer";

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
          {/* title */}
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl italic font-semibold text-center"
          >
            Trayectoria
          </motion.h2>
          <ResumeContainer >
        </motion.div>
      </motion.section>
    </>
  );
};

export default Resume;
