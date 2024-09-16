import { motion } from "framer-motion";
import { FadeLeft } from "../../../../utils/Animations";
import CVButton from "./CVButton";

const Info = () => {
  return (
    <div className="flex flex-col justify-center items-center md:mt-5 lg:mt-0 gap-10">
      <motion.h1
        variants={FadeLeft(0.5)}
        initial="hidden"
        animate="visible"
        className="text-4xl lg:text-5xl text-white text-center font-poppins italic"
      >
        Hey!, Soy <span className="font-bold">Hector</span>
      </motion.h1>
      <motion.p
        variants={FadeLeft(0.8)}
        initial="hidden"
        animate="visible"
        className="text-gray-300 md:w-[300px] text-center font-roboto"
      >
        Desarrollador <span className="font-bold">Full-Stack</span> de
        Argentina, te doy la bienvenida a mi rincon en la web, echemos un
        vistazo!
      </motion.p>
      <CVButton />
    </div>
  );
};

export default Info;
