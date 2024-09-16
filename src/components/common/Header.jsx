import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Logo from "../ui/header/Logo";
import Menu from "../ui/header/Menu";
import LoginButton from "../ui/header/LoginButton";
import MobileButton from "../ui/header/MobileButton";
import ResponsiveMenu from "../ui/header/ResponsiveMenu";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <nav className="flex justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="container flex justify-between items-center py-4 md:pt-4"
        >
          <Logo setIsOpen={setIsOpen} />
          <Menu />
          <LoginButton />
          <MobileButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </motion.div>
      </nav>
      <ResponsiveMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Header;
