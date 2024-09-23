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
            <p>{TechIcons("Html")}</p>
            <p>{TechIcons("CSS")}</p>
            <p>{TechIcons("Github")}</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5">
          <h4 className="text-center text-2xl font-semibold">
            Lenguajes de Programación
          </h4>
          <div className="flex gap-10 text-5xl">
            <p>{TechIcons("JavaScript")}</p>
            <p>{TechIcons("TypeScript")}</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5">
          <h4 className="text-center text-2xl font-semibold">Front-End</h4>
          <div className="flex gap-10 text-5xl">
            <p>{TechIcons("React")}</p>
            <p>{TechIcons("Bootstrap")}</p>
            <p>{TechIcons("Tailwind")}</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5">
          <h4 className="text-center text-2xl font-semibold">Back-End</h4>
          <div className="flex gap-10 text-5xl">
            <p>{TechIcons("Node")}</p>
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
          <h4 className="text-center text-2xl font-semibold">Base de Datos</h4>
          <div className="flex gap-10 text-5xl">
            <p>{TechIcons("MongoDB")}</p>
            <p>{TechIcons("MySQL")}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsTechnological;
