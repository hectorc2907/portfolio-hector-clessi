import ImageProfile from "../../../assets/images/profile.jpg";
import { motion } from "framer-motion";

const HeroImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="flex justify-center lg:justify-end order-1 lg:order-2"
    >
      <img
        src={ImageProfile}
        alt="Profile Image Me"
        className="max-w-80 md:max-w-96 lg:max-w-[450px] xl:max-w-[500px] 2xl:max-w-[600px] shadow-lg shadow-slate-300 rounded-2xl"
      />
    </motion.div>
  );
};

export default HeroImage;
