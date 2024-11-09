import React from "react";
import { SkillsCardPropsTypes } from "../../../Types/types";
const SkillsCard = ({
  title,
  iconUrl,
  isActive,
  onClick,
}: SkillsCardPropsTypes) => {
  return (
    <>
      <div
        className={`skills-card ${isActive ? "active" : ""}`}
        onClick={() => onClick()}
      >
        <div className="skills-icon">
          <img src={iconUrl} alt={title} />
        </div>
        <span>{title}</span>
      </div>
    </>
  );
};

export default SkillsCard;
