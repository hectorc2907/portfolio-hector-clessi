import {
  FaLinkedin,
  FaGithubSquare,
  FaInstagramSquare,
  FaFacebookSquare,
  FaWhatsappSquare,
  FaTelegram,
} from "react-icons/fa";

const FooterNetwork = () => {
  return (
    <div div className="flex justify-center items-center text-white">
      <div className="flex flex-col">
        <h5 className="text-center py-3">Social Network</h5>
        <div className="text-4xl grid grid-cols-3 gap-4">
          <a href="https://www.linkedin.com/in/hector-clessi/" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://github.com/hectorc2907" target="_blank">
            <FaGithubSquare />
          </a>
          <a href="https://www.instagram.com/hectorc2907/" target="_blank">
            <FaInstagramSquare />
          </a>
          <a
            href="https://www.facebook.com/hectoralberto.clessi/"
            target="_blank"
          >
            <FaFacebookSquare />
          </a>
          <a href="https://wa.me/5493812033116" target="_blank">
            <FaWhatsappSquare />
          </a>
          <a href="https://t.me/hectorc2907" target="_blank">
            <FaTelegram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterNetwork;
