import React from "react";
import ResumeExperience from "./ResumeExperience";
import ResumeFormation from "./ResumeFormation";

const ResumeContainer = () => {
  return (
    <div className="grid grid-cols-1 gap-14">
      <ResumeExperience />
      <ResumeFormation />
    </div>
  );
};

export default ResumeContainer;
