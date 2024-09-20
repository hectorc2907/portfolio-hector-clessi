import { motion } from "framer-motion";
import { Menu } from "../../../mocks/Menu";

const HeaderMenu = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="text-white hidden lg:flex gap-10"
    >
      {Menu.map((option) => (
        <a
          key={option.id}
          href={option.link}
          className="text-xl font-semibold hover:text-slate-200 hover:shadow-[0_4px_0_-2px_#e2e8f0]"
        >
          {option.title}
        </a>
      ))}
    </motion.div>
  );
};

export default HeaderMenu;
