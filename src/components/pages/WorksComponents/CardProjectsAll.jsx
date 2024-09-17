import { AllProjects } from "../../../mocks/AllProjects";
import { typeProjectColor } from "../../../utils/typeProjectColor";
import { techIcons } from "../../../utils/techIcons";
import { Link } from "react-router-dom";

const CardProjectsAll = ({ filterText }) => {
  const lowerCaseFilter = filterText.toLowerCase();

  const filteredProjects = AllProjects.filter((project) => {
    const matchTechnologies = project.technologies.some((tech) =>
      tech.toLowerCase().includes(lowerCaseFilter)
    );
    const matchProfile = project.projectProfile
      .toLowerCase()
      .includes(lowerCaseFilter);

    return matchTechnologies || matchProfile;
  });

  // Limitar el número de proyectos mostrados
  const displayedProjects = filteredProjects.reverse().slice(0, 8);

  return (
    <>
      {displayedProjects.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
          {displayedProjects.map((project) => (
            <Link to={`/project/` + project.id} key={project.id}>
              <div className="flex flex-col justify-between bg-black rounded-xl max-w-[300px] min-h-[500px] cursor-pointer hover:shadow-[0_0_15px_-1px_#ffffff] p-4 overflow-hidden">
                <div className="flex justify-between">
                  <p className="text-sm">Publicación: {project.date}</p>
                  <p className="text-sm">Versión: {project.version}</p>
                </div>
                <div className="flex justify-center items-center">
                  <img
                    src={project.icon}
                    alt=""
                    className="w-32 rounded-full"
                  />
                </div>
                <div className="flex flex-col items-center gap-4">
                  <p className="text-xl font-bold">{project.title}</p>
                  <p
                    className={`w-28 text-center ${typeProjectColor(
                      project.projectProfile
                    )} rounded-full`}
                  >
                    {project.projectProfile}
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
                <div className="mt-[-16px]">
                  <p className="text-center">Tipo: {project.type}</p>
                </div>
                <div className="flex justify-evenly pb-2">
                  {project.technologies.map((technology, index) => (
                    <div key={index} className="text-2xl">
                      {techIcons(technology)}
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-white">
          No se encontraron proyectos que coincidan con el filtro.
        </p>
      )}
    </>
  );
};

export default CardProjectsAll;
