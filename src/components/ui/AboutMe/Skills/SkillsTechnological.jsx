import { motion } from "framer-motion";
import { TechIcons } from "../../../../utils/techIcons";

const SkillsTechnological = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
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
          <h4 className="text-center text-2xl font-semibold">Front-End</h4>
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
          <h4 className="text-center text-2xl font-semibold">Base de Datos</h4>
          <div className="flex gap-10 text-5xl">
            <p className="text-[#17AD55]">{TechIcons("MongoDB")}</p>
            <p className="text-[#08668F]">{TechIcons("MySQL")}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillsTechnological;
