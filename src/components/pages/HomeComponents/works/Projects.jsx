import CardNewProjects from "./CardNewProjects";
import CardProjects from "./CardProjects";

const Projects = () => {
  return (
    <div className="flex justify-center">

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10 md:gap-20 py-10">
      <CardNewProjects />
      <CardProjects />
    </div>
    </div>
  );
};

export default Projects;
