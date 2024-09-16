import { MainProjects } from "../../../../mocks/MainProjects";

const WorkCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-5">
      {MainProjects.map((project) => (
        <div key={project.id} className="bg-blue-900 rounded-2xl shadow-2xl">
          <img src={project.image} alt="" className="rounded-t-2xl" />
          <h3 className="text-center text-2xl font-bold pt-3">
            {project.title}
          </h3>
          <p className="text-center text-xl pt-3 italic">{project.type}</p>
          <p className="text-center pt-3">{project.description}</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mx-2 pt-3">
            {project.technologies.map((technology) => (
              <div className="text-center bg-blue-600 rounded-2xl">
                {technology}
              </div>
            ))}
          </div>
          <div className="flex justify-around p-3">
            <button className="bg-blue-600 hover:bg-blue-500 px-3 py-2 rounded-lg shadow-lg">
              <a href={project.repository}>Repositorio</a>
            </button>
            <button className="bg-blue-600 hover:bg-blue-500 px-3 py-2 rounded-lg shadow-lg">
              <a href={project.preview}>Vista Previa</a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkCard;
