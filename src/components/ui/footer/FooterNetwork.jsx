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
      <div className="flex flex-col items-center gap-4">
        <h5 className="text-white text-xl font-semibold">Redes Sociales:</h5>
        <div className="text-4xl grid grid-cols-3 md:grid-cols-6 gap-4">
          <a
            href="https://www.linkedin.com/in/hector-clessi/"
            target="_blank"
            className="hover:opacity-85"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/hectorc2907"
            target="_blank"
            className="hover:opacity-85"
          >
            <FaGithubSquare />
          </a>
          <a
            href="https://www.instagram.com/hectorc2907/"
            target="_blank"
            className="hover:opacity-85"
          >
            <FaInstagramSquare />
          </a>
          <a
            href="https://www.facebook.com/hectoralberto.clessi/"
            target="_blank"
            className="hover:opacity-85"
          >
            <FaFacebookSquare />
          </a>
          <a
            href="https://wa.me/5493812033116"
            target="_blank"
            className="hover:opacity-85"
          >
            <FaWhatsappSquare />
          </a>
          <a
            href="https://t.me/hectorc2907"
            target="_blank"
            className="hover:opacity-85"
          >
            <FaTelegram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default FooterNetwork;
