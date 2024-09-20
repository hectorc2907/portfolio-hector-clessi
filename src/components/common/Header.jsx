import { motion } from "framer-motion";
import Logo from "../../assets/images/logo.png";
import LogoSmall from "../../assets/images/logoSmall.png";
import { Menu } from "../../mocks/Menu";

const Header = () => {
  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-900 p-5 flex justify-center shadow-2xl"
      >
        <div className="container flex justify-between items-center">
          {/* Icon Logo Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <a href="/" className="hidden md:block">
              <img src={Logo} alt="" className="w-64" />
            </a>
            <a href="/" className="md:hidden">
              <img src={LogoSmall} alt="" className="w-[51px]" />
            </a>
          </motion.div>
          {/* Menu Section */}
          {/* Large Menu */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="text-white hidden lg:flex gap-10"
          >
            {Menu.map((option) => (
              <a key={option.id} href={option.link} className="text-xl font-semibold hover:text-slate-200">
                {option.title}
              </a>
            ))}
          </motion.div>
        </div>
      </motion.nav>
    </>
  );
};

export default Header;
