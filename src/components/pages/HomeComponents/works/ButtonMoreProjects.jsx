import React from "react";
import { Link } from "react-router-dom";

const ButtonMoreProjects = () => {
  return (
    <div className="flex justify-center">
      <Link to="/works" className="link-btn">
        Mas Proyectos!
      </Link>
    </div>
  );
};

export default ButtonMoreProjects;
