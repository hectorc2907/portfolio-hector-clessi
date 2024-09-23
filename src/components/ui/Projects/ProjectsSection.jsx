import { motion } from "framer-motion";
import { MyProjects } from "../../../mocks/MyProjects";
import { TechIcons } from "../../../utils/techIcons";

const ProjectsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
      {[...MyProjects].reverse().map((projects, index) => (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 + 0.2 * index }}
          className="bg-white flex flex-col border rounded-2xl shadow-md"
        >
          <img src={projects.img} alt={projects.title} className="rounded-t-2xl" />
          <div className="flex-grow text-center">
            <div className="text-4xl font-semibold italic font-guerrilla pt-3">
              {projects.title}
            </div>
            <div className="text-lg font-semibold">{projects.type}</div>
            <div className="px-10 py-5">{projects.description}</div>
            <div className="flex justify-center pb-5 gap-5">
              {projects.technologies.map((tech) => (
                <div className="text-2xl">{TechIcons(`${tech}`)}</div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2">
            <a href={projects.repository} target="_blank">
              <div className="flex justify-center border rounded-bl-2xl hover:bg-slate-100">
                <div className="py-3 text-center">Repositorio GH</div>
              </div>
            </a>
            <a href={projects.preview} target="_blank">
              <div className="flex justify-center border rounded-br-2xl hover:bg-slate-100">
                <div className="py-3 text-center">Preview</div>
              </div>
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProjectsSection;
