import { useParams } from "react-router-dom";
import { MainProjects } from "../../../mocks/MainProjects";
import { techIcons } from "../../../utils/techIcons";
import { typeProjectColor } from "../../../utils/typeProjectColor";
import { useMediaQuery } from "react-responsive";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const Project = () => {
  const { id } = useParams();
  const data = MainProjects.find((project) => project.id.toString() === id);
  const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
  return (
    <>
      <div className="text-white py-16">
        <div className="flex flex-col items-center">
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-guerrilla text-center">
            {data.title}
          </h1>
          <span
            className={`w-28 my-4 text-center ${typeProjectColor(
              data.type
            )} rounded-full`}
          >
            {data.type}
          </span>
        </div>
        <div className="flex justify-center">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 mx-5">
            <div className="pt-5">
              <div className="max-w-[800px]">
                <ImageGallery
                  items={data.images}
                  autoPlay={true}
                  slideInterval={3000}
                  showFullscreenButton={false}
                  showPlayButton={false}
                  showThumbnails={true}
                  thumbnailPosition={isMobile ? "bottom" : "left"}
                  showNav={isMobile}
                  showBullets={true}
                />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-10">
              <div className="flex flex-col gap-5">
                <h2 className="text-center text-xl font-guerrilla">
                  Descripción del Proyecto
                </h2>
                <p className="text-center">{data.description}</p>
              </div>
              <div className="flex flex-col gap-5">
                <h2 className="text-center text-xl font-guerrilla">
                  Tecnologías
                </h2>
                <div className="flex justify-center gap-10">
                  {data.technologies.map((technology, index) => (
                    <div key={index} className="text-4xl">
                      {techIcons(technology)}
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex justify-center flex-wrap gap-10">
                <div className="link-btn">
                  <a href={data.repository}>Repositorio</a>
                </div>
                <div className="link-btn">
                  <a href={data.preview}>Vista Previa</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
