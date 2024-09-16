import { MainProjects } from "../../../../mocks/MainProjects";
import { motion } from "framer-motion";
import { techIcons } from "../../../../utils/techIcons";
import { typeProjectColor } from "../../../../utils/typeProjectColor";
import { Link } from "react-router-dom";

const CardProjects = () => {
  return (
    <>
      {[...MainProjects].reverse().map((project) => (
        <Link to={`/project/` + project.id}>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: project.delay }}
            key={project.id}
            onClick={() => captureData(project)}
            className="flex flex-col justify-between bg-black rounded-xl max-w-[300px] min-h-[500px] cursor-pointer hover:shadow-[0_0_15px_-1px_#ffffff] p- overflow-hidden p-4"
          >
            <div className="flex justify-between">
              <p className="text-sm">Publicación: {project.date}</p>
              <p className="text-sm">Versión: {project.version}</p>
            </div>
            <div className="flex justify-center items-center">
              <img src={project.image} alt="" className="w-32 rounded-full" />
            </div>
            <div className="flex flex-col items-center gap-4">
              <p className="text-xl font-bold">{project.title}</p>
              <p
                className={`w-28 text-center ${typeProjectColor(
                  project.type
                )} rounded-full`}
              >
                {project.type}
              </p>
              <p
                className="text-sm text-center overflow-hidden"
                style={{
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 3,
                }}
              >
                {project.description} ...
              </p>
            </div>
            <div className="flex justify-evenly pb-2">
              {project.technologies.map((technology, index) => (
                <div key={index} className="text-2xl">
                  {techIcons(technology)}
                </div>
              ))}
            </div>
          </motion.div>
        </Link>
      ))}
    </>
  );
};

export default CardProjects;
