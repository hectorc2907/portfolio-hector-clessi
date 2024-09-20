import ProjectsTitle from "./ProjectsTitle";
import ProjectsSection from "./ProjectsSection";
import ProjectsButtonGH from "./ProjectsButtonGH";

const Projects = () => {
  return (
    <>
      <section className="px-5 py-10 flex justify-center">
        <div className="container grid grid-cols-1 gap-10">
          <ProjectsTitle />
          <ProjectsSection />
          <ProjectsButtonGH />
        </div>
      </section>
    </>
  );
};

export default Projects;
