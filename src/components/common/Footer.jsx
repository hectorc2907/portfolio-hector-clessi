import FooterLogo from "../ui/footer/FooterLogo";
import FooterMenu from "../ui/footer/FooterMenu";
import FooterCopy from "../ui/footer/FooterCopy";
import FooterNetwork from "../ui/footer/FooterNetwork";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-center bg-blue-900 pt-12 mt-12">
        <div className="container grid grid-cols-1 md:grid-cols-3">
          <FooterLogo />
          <FooterMenu />
          <FooterNetwork />
        </div>
      </footer>
      <FooterCopy />
    </>
  );
};

export default Footer;
