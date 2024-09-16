import { MenuOptions } from "../../../mocks/MenuOptions";
import { Link } from "react-router-dom";

const FooterMenu = () => {
  return (
    <div className="flex flex-col items-center gap-4">
      <h5 className="text-white text-xl font-semibold">Enlaces:</h5>
      <ul className="grid grid-cols-2 md:grid-cols-4 gap-10 text-white mb-6 md:mb-0">
        {MenuOptions.map((option) => (
          <li key={option.id} className="text-md hover:text-slate-300">
            <Link to={option.link}>{option.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterMenu;
