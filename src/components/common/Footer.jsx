import { motion } from "framer-motion";
import Logo from "../../assets/images/logo.png";
import { Menu } from "../../mocks/Menu";
import FooterCopyright from "../ui/FooterCopyright";
import FooterSocialMedia from "../ui/FooterSocialMedia";

const Footer = () => {
  return (
    <>
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-zinc-800 text-white p-5 flex justify-center"
      >
        <div className="container flex flex-col items-center lg:items-stretch">
          {/* Footer Nav Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 py-5">
            {/* Footer Logo */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex items-center"
            >
              <a href="/">
                <img
                  src={Logo}
                  alt="Main Logo of HAC Service"
                  className="w-64"
                />
              </a>
            </motion.div>
            {/* Footer Menu */}
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
                    className="hover:text-slate-300"
                  >
                    {option.title}
                  </a>
                ))}
              </div>
            </motion.div>
            {/* Footer Social Networks */}
            <FooterSocialMedia />
          </div>
          {/* Copyright Section */}
          <FooterCopyright />
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
