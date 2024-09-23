import { useState } from "react";
import { motion } from "framer-motion";
import HeaderLogo from "../ui/Header/HeaderLogo";
import HeaderButton from "../ui/Header/HeaderButton";
import HeaderMenuResponsive from "../ui/Header/HeaderMenuResponsive";

const Header = () => {
  const [menuResponsiveActive, setMenuResponsiveActive] = useState(false);

  const buttonMenuActivate = () => {
    setMenuResponsiveActive(!menuResponsiveActive);
  };
  return (
    <>
      <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-900 p-5 flex justify-center shadow-2xl sticky top-0 z-10"
      >
        <div className="container flex justify-between items-center">
          <HeaderLogo />
          <HeaderButton
            menuResponsiveActive={menuResponsiveActive}
            buttonMenuActivate={buttonMenuActivate}
          />
        </div>
      </motion.header>
      <HeaderMenuResponsive menuResponsiveActive={menuResponsiveActive} setMenuResponsiveActive={setMenuResponsiveActive} />
    </>
  );
};

export default Header;
