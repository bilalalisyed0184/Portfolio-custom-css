import React from "react";
import { SkillInfoCardTypes } from "../../../Types/types";
const SkillsInfoCard = ({ heading, skills }: SkillInfoCardTypes) => {
  return (
    <>
      <div className="skills-info-card">
        <h6>{heading}</h6>
        <div className="skills-info-content">
          {skills.map((item, index) => {
            return (
              <React.Fragment key={`skill_${index}`}>
                <div className="skill-info">
                  <p>{item.skills}</p>
                  <p className="percentage">{item.percentage}</p>
                </div>

                <div className="skills-progress-bg">
                  <div
                    className="skill-progress"
                    style={{ width: item.percentage }}
                  ></div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SkillsInfoCard;
