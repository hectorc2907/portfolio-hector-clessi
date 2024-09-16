import { useParams } from "react-router-dom";
import { MainProjects } from "../../../mocks/MainProjects";

const Project = () => {
  const { id } = useParams();
  const data = MainProjects.find((project) => project.id.toString() === id);
  return (
    <>
      <div className="text-white py-16">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-guerrilla">
            {data.title}
          </h1>
          <span>{data.type}</span>
        </div>
      </div>
    </>
  );
};

export default Project;
