import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { MenuResponsiveOptions } from "../../../mocks/MenuResponsiveOptions";

const ResponsiveMenu = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <div className="absolute top-16 left-0 w-full h-screen z-20">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="text-xl font-semibold uppercase bg-blue-600 text-white py-10 m-6 rounded-3xl"
          >
            <ul className="flex flex-col items-center gap-10">
              {MenuResponsiveOptions.map((option) => (
                <li key={option.id} onClick={() => setIsOpen(!isOpen)}>
                  <Link to={option.link}>{option.title}</Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
