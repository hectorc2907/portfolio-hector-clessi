import { motion } from "framer-motion";

const HeroButtonCV = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1.3 }}
      className="flex justify-center mt-4"
    >
      <a
        href="https://drive.google.com/file/d/1gkwmPfMoajtj-D0CYIEgenw1PS0bK0Wt/view?usp=sharing"
        target="_blank"
      >
        <div className="w-[250px] py-3 text-center border shadow-sm hover:shadow-md hover:shadow-slate-300">
          Ver Curriculum Vitae
        </div>
      </a>
    </motion.div>
  );
};

export default HeroButtonCV;
