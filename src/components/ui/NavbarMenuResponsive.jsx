import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "../../mocks/Menu";

const NavbarMenuResponsive = ({ menuResponsiveActive }) => {
  return (
    <AnimatePresence mode="wait">
      {menuResponsiveActive && (
        <div className="absolute lg:hidden top-20 left-0 w-full h-screen z-20">
          <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 0.3 }}
            className="text-xl font-semibold uppercase bg-blue-900 text-white py-10 m-6 rounded-3xl shadow-lg shadow-slate-400"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-white flex flex-col items-center gap-10"
            >
              {Menu.map((option) => (
                <a
                  key={option.id}
                  href={option.link}
                  className="text-xl font-semibold hover:text-slate-200"
                >
                  {option.title}
                </a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default NavbarMenuResponsive;
