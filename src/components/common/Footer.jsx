import { motion } from "framer-motion";
import FooterLogo from "../ui/footer/FooterLogo";
import FooterMenu from "../ui/footer/FooterMenu";
import FooterCopy from "../ui/footer/FooterCopy";
import FooterNetwork from "../ui/footer/FooterNetwork";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-center bg-[#1E1E1D] pt-12 mt-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="container flex flex-col gap-6"
        >
          <FooterLogo />
          <FooterMenu />
          <FooterNetwork />
        </motion.div>
      </footer>
      <FooterCopy />
    </>
  );
};

export default Footer;
