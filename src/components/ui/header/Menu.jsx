import React from "react";
import { Link } from "react-router-dom";
import { MenuOptions } from "../../../mocks/MenuOptions";

const Menu = () => {
  return (
    <div className="hidden lg:block">
      <ul className="flex items-center gap-6 text-white">
        {MenuOptions.map((option) => (
          <li key={option.id} className="text-xl">
            <Link
              to={option.link}
              className="inline-block py-1 px-3 hover:text-slate-300 hover:shadow-[0_3px_0_-1px_#cbd5e1] font-semibold"
            >
              {option.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;
