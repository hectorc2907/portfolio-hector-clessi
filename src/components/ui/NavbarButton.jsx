import NavbarButtonResponsive from "./NavbarButtonResponsive";
import NavbarMenu from "./NavbarMenu";

const NavbarButton = ({ menuResponsiveActive, buttonMenuActivate }) => {
  return (
    <>
      <NavbarMenu />
      <NavbarButtonResponsive
        menuResponsiveActive={menuResponsiveActive}
        buttonMenuActivate={buttonMenuActivate}
      />
    </>
  );
};

export default NavbarButton;
