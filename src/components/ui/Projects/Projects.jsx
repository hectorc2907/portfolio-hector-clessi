import { motion } from "framer-motion";
import { MyProjects } from "../../../mocks/MyProjects";
import { TechIcons } from "../../../utils/techIcons";

const Projects = () => {
  return (
    <>
      <section className="px-5 py-10 flex justify-center">
        <div className="container grid grid-cols-1 gap-10">
          {/* Projects Main Section Title */}
          <h2 className="text-4xl italic font-semibold text-center">
            Proyectos
          </h2>
          {/* Project Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
            {/* All Projects Scan */}
            {MyProjects.map((projects) => (
              <div className="bg-white flex flex-col border rounded-2xl shadow-md">
                {/* Project Image */}
                <img src={projects.img} alt="" className="rounded-t-2xl" />
                <div className="flex-grow text-center">
                  {/* Project Title */}
                  <div className="text-4xl font-semibold italic font-guerrilla pt-3">
                    {projects.title}
                  </div>
                  {/* Project Type */}
                  <div className="text-lg font-semibold">{projects.type}</div>
                  {/* Project Description */}
                  <div className="px-10 py-5">{projects.description}</div>
                  {/* Project Technologies */}
                  <div className="flex justify-center pb-5 gap-5">
                    {projects.technologies.map((tech) => (
                      <div className="text-2xl">{TechIcons(`${tech}`)}</div>
                    ))}
                  </div>
                </div>
                {/* Project Buttons */}
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
              </div>
            ))}
          </div>
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
