import { motion } from "framer-motion";
import SkillsTitle from "./SkillsTitle";
import SkillsBox from "./SkillsBox";
import SkillsTechnological from "./SkillsTechnological";

const Skills = () => {
  return (
    <>
      <motion.section
      id="skills"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-blue-900 text-white px-5 py-10 flex justify-center"
      >
        <div className="container grid grid-cols-1 gap-10">
          <SkillsTitle />
          <SkillsBox />
          <SkillsTechnological />
        </div>
      </motion.section>
    </>
  );
};

export default Skills;
