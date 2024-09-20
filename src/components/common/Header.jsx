import { useState } from "react";
import { motion } from "framer-motion";
import NavbarLogo from "../ui/NavbarLogo";
import NavbarButton from "../ui/NavbarButton";
import NavbarMenuResponsive from "../ui/NavbarMenuResponsive";

const Header = () => {
  const [menuResponsiveActive, setMenuResponsiveActive] = useState(false);

  const buttonMenuActivate = () => {
    setMenuResponsiveActive(!menuResponsiveActive);
  };
  return (
    <>
      <motion.nav
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-900 p-5 flex justify-center shadow-2xl shadow-slate-400"
      >
        <div className="container flex justify-between items-center">
          <NavbarLogo />
          <NavbarButton
            menuResponsiveActive={menuResponsiveActive}
            buttonMenuActivate={buttonMenuActivate}
          />
        </div>
      </motion.nav>
      <NavbarMenuResponsive menuResponsiveActive={menuResponsiveActive} />
    </>
  );
};

export default Header;
