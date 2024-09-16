import { motion, AnimatePresence } from "framer-motion";
import { RxCrossCircled } from "react-icons/rx";

const BoxProjects = ({ isOpenCard, setIsOpenCard, selectedProject }) => {
  return (
    <AnimatePresence>
      {isOpenCard && (
        <div className="absolute w-full z-20">
          <div className="text-xl font-semibold uppercase bg-[#1E1E1D] text-white py-10 m-6 rounded-3xl">
            <p>{selectedProject.title}</p>
            <RxCrossCircled
              className="pointer"
              onClick={() => setIsOpenCard(false)}
            />
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default BoxProjects;
