import Profile from "../../../../assets/images/profile.jpg";
import { motion } from "framer-motion";

const ProfileImage = () => {
  return (
    <div className="flex justify-center">
      <motion.div
        initial={{ opacity: 0, x: -200 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="w-96"
      >
        <img src={Profile} alt="profile image" className="rounded-3xl shadow-2xl" />
      </motion.div>
    </div>
  );
};

export default ProfileImage;
