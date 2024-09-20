import { motion } from "framer-motion";
import { TechIcons } from "../../../utils/techIcons";
import ProjectsTitle from "./ProjectsTitle";
import ProjectsSection from "./ProjectsSection";

const Projects = () => {
  return (
    <>
      <section className="px-5 py-10 flex justify-center">
        <div className="container grid grid-cols-1 gap-10">
          {/* Projects Main Section Title */}
          <ProjectsTitle />
          {/* Project Section */}
          <ProjectsSection />
          {/* Project Button More Projects */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
            className="flex justify-center mt-4"
          >
            <a
              href="https://github.com/hectorc2907?tab=repositories"
              target="_blank"
            >
              <div className="w-[250px] py-3 border shadow-sm hover:shadow-md hover:shadow-slate-300 flex justify-center items-center gap-2 text-xl">
                <p>Visitar GH </p>
                <span>{TechIcons("GitHub")}</span>
              </div>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Projects;
