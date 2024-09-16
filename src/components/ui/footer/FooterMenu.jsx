import { MenuOptions } from "../../../mocks/MenuOptions";
import { Link } from "react-router-dom";

const FooterMenu = () => {
  return (
    <div className="flex justify-center">
      <ul className="flex flex-col items-center gap-4 text-white mb-6 md:mb-0">
        <li>Links:</li>
        {MenuOptions.map((option) => (
          <li key={option.id} className="text-md hover:text-slate-500">
            <Link to={option.link}>{option.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterMenu;
