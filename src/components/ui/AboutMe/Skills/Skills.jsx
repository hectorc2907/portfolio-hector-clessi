import { TechIcons } from "../../../../utils/techIcons";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="bg-blue-900 text-white px-5 py-10 flex justify-center"
      >
        <div className="container grid grid-cols-1 gap-10">
          {/* Skills Title */}
          <motion.h2
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-4xl italic font-semibold text-center"
          >
            Habilidades
          </motion.h2>
          {/* Skills Box */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 text-black">
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="bg-white flex flex-col p-5 rounded-2xl shadow-md shadow-slate-900">
              <h3 className="py-3 text-center text-2xl font-semibold italic font-guerrilla">
                Front-End
              </h3>
              <p className="py-3">
                Soy desarrollador especializado en front-end, utilizando
                tecnologías modernas como React, React Native, Tailwind CSS y
                Bootstrap para crear interfaces atractivas, dinámicas y
                altamente responsivas. Me enfoco en ofrecer experiencias de
                usuario fluidas y optimizadas, tanto en aplicaciones web como
                móviles, asegurando un diseño consistente y un rendimiento
                rápido en cualquier dispositivo. Mi pasión es transformar ideas
                en interfaces funcionales, centrándome en la accesibilidad y la
                interacción intuitiva.
              </p>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.9 }}
            className="bg-white flex flex-col p-5 rounded-2xl shadow-md shadow-slate-900">
              <h3 className="py-3 text-center text-2xl font-semibold italic font-guerrilla">
                Back-End
              </h3>
              <p className="py-3">
                En el ámbito del back-end, desarrollo soluciones robustas
                utilizando Express para crear APIs escalables y seguras. Me
                aseguro de que cada sistema esté diseñado para manejar
                eficientemente las interacciones del lado del servidor,
                ofreciendo integraciones sólidas con bases de datos y asegurando
                que las aplicaciones funcionen sin problemas detrás de escena.
                Mi prioridad es garantizar que los sistemas sean eficientes,
                bien estructurados y fáciles de mantener.
              </p>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.1 }}
            className="bg-white flex flex-col p-5 rounded-2xl shadow-md shadow-slate-900">
              <h3 className="py-3 text-center text-2xl font-semibold italic font-guerrilla">
                Base de Datos
              </h3>
              <p className="py-3">
                En cuanto a bases de datos, tengo experiencia trabajando tanto
                con sistemas NoSQL como MongoDB, como con bases de datos
                relacionales como MySQL. Implemento soluciones de almacenamiento
                de datos que optimizan el rendimiento y permiten un manejo
                eficiente de la información. Me especializo en diseñar bases de
                datos escalables y seguras, asegurando que los datos estén
                organizados de manera óptima para soportar aplicaciones tanto en
                entornos pequeños como en proyectos a gran escala.
              </p>
            </motion.div>
          </div>
          {/* Skills Technologies */}
          <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="bg-white p-5 text-black rounded-2xl shadow-md shadow-slate-900">
            <h3 className="text-center text-2xl font-semibold italic font-guerrilla">
              Tecnologías
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 py-5 gap-10">
              <div className="flex flex-col items-center gap-5">
                <h4 className="text-center text-2xl font-semibold">Basicas</h4>
                <div className="flex gap-10 text-5xl">
                  <p className="text-[#E4552E]">{TechIcons("Html")}</p>
                  <p className="text-[#2D53E5]">{TechIcons("CSS")}</p>
                  <p>{TechIcons("Github")}</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <h4 className="text-center text-2xl font-semibold">
                  Lenguajes de Programación
                </h4>
                <div className="flex gap-10 text-5xl">
                  <p className="text-[#EBCC37]">{TechIcons("JavaScript")}</p>
                  <p className="text-[#377CC8]">{TechIcons("TypeScript")}</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <h4 className="text-center text-2xl font-semibold">
                  Front-End
                </h4>
                <div className="flex gap-10 text-5xl">
                  <p className="text-[#1BA1CC]">{TechIcons("React")}</p>
                  <p className="text-[#8819FD]">{TechIcons("Bootstrap")}</p>
                  <p className="text-[#3EBFF8]">{TechIcons("Tailwind")}</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <h4 className="text-center text-2xl font-semibold">Back-End</h4>
                <div className="flex gap-10 text-5xl">
                  <p className="text-[#8EC608]">{TechIcons("Node")}</p>
                  <p>{TechIcons("Express")}</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <h4 className="text-center text-2xl font-semibold">Moviles</h4>
                <div className="flex gap-10 text-5xl">
                  <p className="text-[#1BA1CC]">{TechIcons("React")}</p>
                </div>
              </div>
              <div className="flex flex-col items-center gap-5">
                <h4 className="text-center text-2xl font-semibold">
                  Base de Datos
                </h4>
                <div className="flex gap-10 text-5xl">
                  <p className="text-[#17AD55]">{TechIcons("MongoDB")}</p>
                  <p className="text-[#08668F]">{TechIcons("MySQL")}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Skills;
