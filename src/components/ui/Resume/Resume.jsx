import { MyEducation } from "../../../mocks/MyEducation";
import { MyExperience } from "../../../mocks/MyExperience";
import { motion } from "framer-motion";

import ResumeContainer from "./ResumeContainer";
import ResumeTitle from "./ResumeTitle";

const Resume = () => {
  return (
    <>
      <motion.section
      id="experience"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-blue-900 md:bg-white px-5 py-10 flex justify-center text-white"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-blue-900 md:shadow-md md:shadow-slate-900 container grid grid-cols-1 gap-10 rounded-2xl p-5"
        >
          <ResumeTitle />
          <ResumeContainer />
        </motion.div>
      </motion.section>
    </>
  );
};

export default Resume;
