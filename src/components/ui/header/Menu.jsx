import React from "react";
import { Link } from "react-router-dom";

const Options = [
  {
    id: 0,
    title: "About Me",
    link: "/about",
  },
  {
    id: 1,
    title: "Works",
    link: "/works",
  },
  {
    id: 2,
    title: "Contact",
    link: "/contact",
  },
];

const Menu = () => {
  return (
    <div className="hidden md:block">
      <ul className="flex items-center gap-6 text-gray-700">
        {Options.map((option) => (
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
