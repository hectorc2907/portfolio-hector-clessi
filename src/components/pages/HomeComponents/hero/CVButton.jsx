import { motion } from "framer-motion";
import { FadeLeft } from "../../../../utils/Animations";

const CVButton = () => {
  return (
    <motion.a
      variants={FadeLeft(1.1)}
      initial="hidden"
      animate="visible"
      href="https://drive.google.com/file/d/1gkwmPfMoajtj-D0CYIEgenw1PS0bK0Wt/view?usp=drive_link"
      target="_blank"
      className="border hover:shadow-md hover:shadow-white"
    >
      <div className="px-5 py-3 text-white font-roboto text-2xl">
        Curriculum Vitae
      </div>
    </motion.a>
  );
};

export default CVButton;
