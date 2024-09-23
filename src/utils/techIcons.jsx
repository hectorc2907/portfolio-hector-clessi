import {
  SiHtml5,
  SiCss3,
  SiGithub,
  SiGit,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiBootstrap,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

export const TechIcons = (technology) => {
  switch (technology.toLowerCase()) {
    case "html":
      return <SiHtml5 className="text-[#E4552E]" />;
    case "css":
      return <SiCss3 className="text-[#2D53E5]" />;
    case "github":
      return <SiGithub />;
      case "git":
      return <SiGit className="text-[#F05539]" />;
    case "javascript":
      return <SiJavascript className="text-[#EBCC37]" />;
    case "typescript":
      return <SiTypescript className="text-[#377CC8]" />;
    case "react":
      return <SiReact className="text-[#1BA1CC]" />;
    case "bootstrap":
      return <SiBootstrap className="text-[#8819FD]" />;
    case "tailwind":
      return <SiTailwindcss className="text-[#3EBFF8]" />;
    case "node":
      return <SiNodedotjs className="text-[#8EC608]" />;
    case "express":
      return <SiExpress />;
    case "mongodb":
      return <SiMongodb className="text-[#17AD55]" />;
    case "mysql":
      return <GrMysql className="text-[#08668F]" />;
    default:
      break;
  }
};
