import React from "react";
import { Link } from "react-router-dom";
import { MenuOptions } from "../../../mocks/MenuOptions";

const Menu = () => {
  return (
    <div className="hidden md:block">
      <ul className="flex items-center gap-6 text-gray-700">
        {MenuOptions.map((option) => (
          <li key={option.id} className="text-xl">
            <Link
              to={option.link}
              className="inline-block py-1 px-3 hover:text-blue-600 hover:shadow-[0_3px_0_-1px_#2563EB] font-semibold"
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
