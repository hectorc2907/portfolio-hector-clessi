import { motion } from "framer-motion";
import { TechIcons } from "../../../utils/techIcons";

const SkillsTechnological = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 1.3 }}
      className="bg-white p-5 text-black rounded-2xl shadow-md shadow-slate-900"
    >
      <h3 className="text-center text-2xl font-semibold italic font-guerrilla">
        Tecnologías
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 py-5 gap-10">
        <div className="flex flex-col items-center gap-5">
          <h4 className="text-center text-2xl font-semibold">Basicas</h4>
          <div className="flex gap-10 text-5xl">
            <div className="flex flex-col items-center gap-3">
              <p>{TechIcons("Html")}</p>
              <span className="text-[16px]">HTML</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <p>{TechIcons("CSS")}</p>
              <span className="text-[16px]">CSS</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <p>{TechIcons("Git")}</p>
              <span className="text-[16px]">Git</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5">
          <h4 className="text-center text-2xl font-semibold">
            Lenguajes de Programación
          </h4>
          <div className="flex gap-10 text-5xl">
            <div className="flex flex-col items-center gap-3">
              <p>{TechIcons("JavaScript")}</p>
              <span className="text-[16px]">JavaScript</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <p>{TechIcons("TypeScript")}</p>
              <span className="text-[16px]">TypeScript</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5">
          <h4 className="text-center text-2xl font-semibold">Front-End</h4>
          <div className="flex gap-10 text-5xl">
            <div className="flex flex-col items-center gap-3">
              <p>{TechIcons("React")}</p>
              <span className="text-[16px]">React.JS</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <p>{TechIcons("Bootstrap")}</p>
              <span className="text-[16px]">Bootstrap</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <p>{TechIcons("Tailwind")}</p>
              <span className="text-[16px]">Tailwind</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5">
          <h4 className="text-center text-2xl font-semibold">Back-End</h4>
          <div className="flex gap-10 text-5xl">
            <div className="flex flex-col items-center gap-3">
              <p>{TechIcons("Node")}</p>
              <span className="text-[16px]">Node.JS</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <p>{TechIcons("Express")}</p>
              <span className="text-[16px]">Express.JS</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5">
          <h4 className="text-center text-2xl font-semibold">Moviles</h4>
          <div className="flex gap-10 text-5xl">
            <div className="flex flex-col items-center gap-3">
              <p>{TechIcons("React")}</p>
              <span className="text-[16px]">React Native</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5">
          <h4 className="text-center text-2xl font-semibold">Base de Datos</h4>
          <div className="flex gap-10 text-5xl">
          <div className="flex flex-col items-center gap-3">
              <p>{TechIcons("MongoDB")}</p>
              <span className="text-[16px]">MongoDB</span>
            </div>
            <div className="flex flex-col items-center gap-3">
              <p>{TechIcons("MySQL")}</p>
              <span className="text-[16px]">MySQL</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsTechnological;
