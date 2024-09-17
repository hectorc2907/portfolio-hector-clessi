import { useParams } from "react-router-dom";
import { MainProjects } from "../../../mocks/MainProjects";
import { techIcons } from "../../../utils/techIcons";
import { typeProjectColor } from "../../../utils/typeProjectColor";
import { motion } from "framer-motion";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { AllProjects } from "../../../mocks/AllProjects";
import Meta from "../../ui/Meta";

const Project = () => {
  const { id } = useParams();
  const data =
    MainProjects.find((project) => project.id.toString() === id) ||
    AllProjects.find((project) => project.id.toString() === id);
  return (
    <>
      <Meta title={data.title} />
      <div className="text-white py-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="flex flex-col items-center"
        >
          <h1 className="text-4xl md:text-5xl xl:text-6xl font-guerrilla text-center">
            {data.title}
          </h1>
          <span
            className={`w-28 my-4 text-center ${typeProjectColor(
              data.projectProfile
            )} rounded-full`}
          >
            {data.projectProfile}
          </span>
        </motion.div>
        <div className="flex justify-center">
          <div className="container grid grid-cols-1 lg:grid-cols-2 gap-10 mx-5">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="pt-5"
            >
              <div className="max-w-[800px]">
                <ImageGallery
                  items={data.images}
                  autoPlay={true}
                  slideInterval={3000}
                  showFullscreenButton={false}
                  showPlayButton={false}
                  showThumbnails={true}
                  thumbnailPosition="bottom"
                  showNav={false}
                  showBullets={true}
                />
              </div>
            </motion.div>
            <div className="flex flex-col justify-center gap-10">
              <div className="flex flex-col gap-5">
                <motion.h2
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                  className="text-center text-xl font-guerrilla"
                >
                  Descripción del Proyecto
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.7 }}
                  className="text-center"
                >
                  Tipo: {data.type}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 0.9 }}
                  className="text-center"
                >
                  {data.description}
                </motion.p>
              </div>
              <div className="flex flex-col gap-5">
                <motion.h2
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1, delay: 1.1 }}
                  className="text-center text-xl font-guerrilla"
                >
                  Tecnologías
                </motion.h2>
                <div className="flex justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: 1.3 }}
                    className="grid grid-cols-4 gap-10"
                  >
                    {data.technologies.map((technology, index) => (
                      <div key={index} className="text-4xl">
                        {techIcons(technology)}
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1.5 }}
                className="flex justify-center flex-wrap gap-10"
              >
                <div className="link-btn">
                  <a href={data.repository} target="_blank">
                    Repositorio
                  </a>
                </div>
                <div className="link-btn">
                  <a href={data.preview} target="_blank">
                    Vista Previa
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
