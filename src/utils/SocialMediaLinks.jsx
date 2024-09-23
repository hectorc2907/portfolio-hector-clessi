import {
  FaLinkedin,
  FaGithubSquare,
  FaFacebookSquare,
  FaInstagramSquare,
  FaWhatsappSquare,
} from "react-icons/fa";
import { FaSquareXTwitter, FaTelegram } from "react-icons/fa6";

export function SocialMediaLinks(media) {
  switch (media.toLowerCase()) {
    case "linkedin":
      return (
        <a href="https://www.linkedin.com/in/hector-clessi/" target="_blank">
          <FaLinkedin />
        </a>
      );
    case "github":
      return (
        <a href="https://github.com/hectorc2907" target="_blank">
          <FaGithubSquare />
        </a>
      );
    case "facebook":
      return (
        <a
          href="https://www.facebook.com/hectoralberto.clessi/"
          target="_blank"
        >
          <FaFacebookSquare />
        </a>
      );
    case "instagram":
      return (
        <a href="https://www.instagram.com/hectorc2907/" target="_blank">
          <FaInstagramSquare />
        </a>
      );
    case "twitter":
      return (
        <a href="https://x.com/HClessi" target="_blank">
          <FaSquareXTwitter />
        </a>
      );
    case "whatsapp":
      return (
        <a href="https://wa.me/5493812033116" target="_blank">
          <FaWhatsappSquare />
        </a>
      );
      case "telegram":
      return (
        <a href="https://t.me/hectorc2907" target="_blank" className="">
          <FaTelegram />
        </a>
      );
  }
}
