import CardNewProjects from "./CardNewProjects";
import CardProjects from "./CardProjects";

const Projects = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 py-10">
      <CardNewProjects />
      <CardProjects />
    </div>
  );
};

export default Projects;
