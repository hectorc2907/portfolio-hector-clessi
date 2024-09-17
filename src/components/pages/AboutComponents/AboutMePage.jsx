import { motion } from "framer-motion";
import FirstSection from "./card/FirstSection";
import SecondSection from "./card/SecondSection";
import ThirdSection from "./card/ThirdSection";

const AboutMePage = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="container grid grid-cols-1 gap-10 md:px-5 xl:px-0">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-center text-white font-roboto text-5xl pt-10"
          >
            ¿Quien Soy?
          </motion.h1>
          <div className="flex flex-col gap-10">
            <FirstSection />
            <SecondSection />
            <ThirdSection />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMePage;
