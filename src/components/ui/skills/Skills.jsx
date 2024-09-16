import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Skills = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 py-10 px-5 xl:px-0">
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="bg-[#161513] rounded-2xl cursor-pointer hover:shadow-[0_0_15px_-1px_#ffffff]"
      >
        <Link to="/works">
          <h3 className="text-center font-guerrilla py-3">
            Tecnologías Basicas
          </h3>
          <ul className="grid grid-cols-4 pt-2 pb-4">
            <li className="flex flex-col gap-2 items-center justify-center text-5xl">
              <SiHtml5 />
              <span className="text-sm">HTML</span>
            </li>
            <li className="flex flex-col gap-2 items-center justify-center text-5xl">
              <SiCss3 />
              <span className="text-sm">CSS</span>
            </li>
          </ul>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="bg-[#161513] rounded-2xl cursor-pointer hover:shadow-[0_0_15px_-1px_#ffffff]"
      >
        <Link to="/works">
          <h3 className="text-center font-guerrilla py-3">
            Lenguajes de Programacion
          </h3>
          <ul className="grid grid-cols-4 pt-2 pb-4">
            <li className="flex flex-col gap-2 items-center justify-center text-5xl">
              <SiJavascript />
              <span className="text-sm">JavaScript</span>
            </li>
            <li className="flex flex-col gap-2 items-center justify-center text-5xl">
              <SiTypescript />
              <span className="text-sm">TypeScript</span>
            </li>
          </ul>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="bg-[#161513] rounded-2xl cursor-pointer hover:shadow-[0_0_15px_-1px_#ffffff]"
      >
        <Link to="/works">
          <h3 className="text-center font-guerrilla py-3">
            Tecnologías Front-End
          </h3>
          <ul className="grid grid-cols-4 pt-2 pb-4">
            <li className="flex flex-col gap-2 items-center justify-center text-5xl">
              <SiReact />
              <span className="text-sm">React.JS</span>
            </li>
            <li className="flex flex-col gap-2 items-center justify-center text-5xl">
              <SiBootstrap />
              <span className="text-sm">Bootstrap</span>
            </li>
            <li className="flex flex-col gap-2 items-center justify-center text-5xl">
              <SiTailwindcss />
              <span className="text-sm">TailwindCSS</span>
            </li>
          </ul>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="bg-[#161513] rounded-2xl cursor-pointer hover:shadow-[0_0_15px_-1px_#ffffff]"
      >
        <Link to="/works">
          <h3 className="text-center font-guerrilla py-3">
            Tecnologías Back-End
          </h3>
          <ul className="grid grid-cols-4 pt-2 pb-4">
            <li className="flex flex-col gap-2 items-center justify-center text-5xl">
              <SiNodedotjs />
              <span className="text-sm">Node.JS</span>
            </li>
            <li className="flex flex-col gap-2 items-center justify-center text-5xl">
              <SiExpress />
              <span className="text-sm">Express.JS</span>
            </li>
          </ul>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="bg-[#161513] rounded-2xl cursor-pointer hover:shadow-[0_0_15px_-1px_#ffffff]"
      >
        <Link to="/works">
          <h3 className="text-center font-guerrilla py-3">
            Tecnologías Mobile
          </h3>
          <ul className="grid grid-cols-4 pt-2 pb-4">
            <li className="flex flex-col gap-2 items-center justify-center text-5xl">
              <SiReact />
              <span className="text-sm">React Native</span>
            </li>
          </ul>
        </Link>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="bg-[#161513] rounded-2xl cursor-pointer hover:shadow-[0_0_15px_-1px_#ffffff]"
      >
        <Link to="/works">
          <h3 className="text-center font-guerrilla py-3">Base de Datos</h3>
          <ul className="grid grid-cols-4 pt-2 pb-4">
            <li className="flex flex-col gap-2 items-center justify-center text-5xl">
              <SiMongodb />
              <span className="text-sm">MongoDB</span>
            </li>
            <li className="flex flex-col gap-2 items-center justify-center text-5xl">
              <GrMysql />
              <span className="text-sm">MySQL</span>
            </li>
          </ul>
        </Link>
      </motion.div>
    </div>
  );
};

export default Skills;
