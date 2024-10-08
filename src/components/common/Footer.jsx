import { motion } from "framer-motion";
import FooterLogo from "../ui/Footer/FooterLogo";
import FooterMenu from "../ui/Footer/FooterMenu";
import FooterSocialMedia from "../ui/Footer/FooterSocialMedia";
import FooterCopyright from "../ui/Footer/FooterCopyright";

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
          <div className="grid grid-cols-1 lg:flex lg:justify-between gap-5 py-5">
            <FooterLogo />
            <FooterMenu />
            <FooterSocialMedia />
          </div>
          <FooterCopyright />
        </div>
      </motion.footer>
    </>
  );
};

export default Footer;
