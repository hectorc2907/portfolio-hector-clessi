import {
  SiHtml5,
  SiCss3,
  SiGithub,
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
      return <SiHtml5 />;
    case "css":
      return <SiCss3 />;
    case "github":
      return <SiGithub />;
    case "javascript":
      return <SiJavascript />;
    case "typescript":
      return <SiTypescript />;
    case "react":
      return <SiReact />;
    case "bootstrap":
      return <SiBootstrap />;
    case "tailwind":
      return <SiTailwindcss />;
    case "node":
      return <SiNodedotjs />;
    case "express":
      return <SiExpress />;
    case "mongodb":
      return <SiMongodb />;
    case "mysql":
      return <GrMysql />;
    default:
      break;
  }
};
