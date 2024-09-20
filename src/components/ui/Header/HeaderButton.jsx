import HeaderMenu from "./HeaderMenu";
import HeaderButtonResponsive from "./HeaderButtonResponsive";

const HeaderButton = ({ menuResponsiveActive, buttonMenuActivate }) => {
  return (
    <>
      <HeaderMenu />
      <HeaderButtonResponsive
        menuResponsiveActive={menuResponsiveActive}
        buttonMenuActivate={buttonMenuActivate}
      />
    </>
  );
};

export default HeaderButton;
