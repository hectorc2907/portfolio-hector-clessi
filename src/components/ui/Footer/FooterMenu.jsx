import { motion } from "framer-motion";
import { Menu } from "../../../mocks/Menu";

const FooterMenu = () => {
  const handleSmoothScroll = (event, link) => {
    event.preventDefault();
    const offset = 80;
    const section = document.querySelector(link);
    const sectionPosition =
      section.getBoundingClientRect().top + window.scrollY - offset;

    window.scrollTo({
      top: sectionPosition,
      behavior: "smooth",
    });
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="flex flex-col items-center gap-5"
    >
      <h5 className="text-lg font-semibold">Enlaces:</h5>
      <div className="grid grid-cols-1 lg:grid-cols-3 xl:grid-cols-5 gap-3 lg:gap-5 text-center">
        {Menu.map((option) => (
          <a
            key={option.id}
            href={option.link}
            onClick={(event) => handleSmoothScroll(event, option.link)}
            className="hover:text-slate-300"
          >
            {option.title}
          </a>
        ))}
      </div>
    </motion.div>
  );
};

export default FooterMenu;
