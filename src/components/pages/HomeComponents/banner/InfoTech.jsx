import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const InfoTech = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-20 py-10 px-5 xl:px-0">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="bg-[#161513] rounded-2xl cursor-pointer hover:shadow-[0_0_15px_-1px_#ffffff] h-[400px]"
      >
        <Link to="/works">
          <div className="flex flex-col justify-between h-full p-4">
            <h3 className="text-center font-guerrilla py-3">Front-End</h3>
            <p className="text-center mt-[-20px]">
              Soy desarrollador especializado en front-end, utilizando
              tecnologías modernas como React, React Native, Tailwind CSS y
              Bootstrap para crear interfaces atractivas, dinámicas y altamente
              responsivas. Me enfoco en ofrecer experiencias de usuario fluidas
              y optimizadas, tanto en aplicaciones web como móviles, asegurando
              un diseño consistente y un rendimiento rápido en cualquier
              dispositivo. Mi pasión es transformar ideas en interfaces
              funcionales, centrándome en la accesibilidad y la interacción
              intuitiva.
            </p>
            <div className="flex justify-around text-5xl">
              <SiReact />
              <SiBootstrap />
              <SiTailwindcss />
            </div>
          </div>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="bg-[#161513] rounded-2xl cursor-pointer hover:shadow-[0_0_15px_-1px_#ffffff] h-[400px]"
      >
        <Link to="/works">
          <div className="flex flex-col justify-between h-full p-4">
            <h3 className="text-center font-guerrilla py-3">Back-End</h3>
            <p className="text-center mt-[-20px]">
              En el ámbito del back-end, desarrollo soluciones robustas
              utilizando Express para crear APIs escalables y seguras. Me
              aseguro de que cada sistema esté diseñado para manejar
              eficientemente las interacciones del lado del servidor, ofreciendo
              integraciones sólidas con bases de datos y asegurando que las
              aplicaciones funcionen sin problemas detrás de escena. Mi
              prioridad es garantizar que los sistemas sean eficientes, bien
              estructurados y fáciles de mantener.
            </p>
            <div className="flex justify-around text-5xl">
              <SiNodedotjs />
              <SiExpress />
            </div>
          </div>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="bg-[#161513] rounded-2xl cursor-pointer hover:shadow-[0_0_15px_-1px_#ffffff] h-[400px]"
      >
        <Link to="/works">
          <div className="flex flex-col justify-between h-full p-4">
            <h3 className="text-center font-guerrilla py-3">DataBase</h3>
            <p className="text-center mt-[-20px]">
              En cuanto a bases de datos, tengo experiencia trabajando tanto con
              sistemas NoSQL como MongoDB, como con bases de datos relacionales
              como MySQL. Implemento soluciones de almacenamiento de datos que
              optimizan el rendimiento y permiten un manejo eficiente de la
              información. Me especializo en diseñar bases de datos escalables y
              seguras, asegurando que los datos estén organizados de manera
              óptima para soportar aplicaciones tanto en entornos pequeños como
              en proyectos a gran escala.
            </p>
            <div className="flex justify-around text-5xl">
              <SiMongodb />
              <GrMysql />
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  );
};

export default InfoTech;
