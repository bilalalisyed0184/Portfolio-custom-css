"use client";
import React, { useState } from "react";
import { SKILLS } from "../utils/data";
import SkillsCard from "./SkillsCard";
import SkillsInfoCard from "./SkillsInfoCard";
import { SkillsTypes } from "../../../Types/types";
const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<SkillsTypes>(SKILLS[0]);
  const handleSelectSkill = (data: SkillsTypes) => {
    setSelectedSkill(data);
  };
  return (
    <>
      <section className="skills-container" id="skills">
        <h5>Technical Proficiency</h5>
        <div className="skills-content">
          <div className="skills">
            {SKILLS.map((item) => (
              <SkillsCard
                key={item.title}
                iconUrl={item.icon}
                title={item.title}
                isActive={selectedSkill.title === item.title}
                onClick={() => {
                  handleSelectSkill(item);
                }}
              />
            ))}
          </div>
          <div className="skills-info">
            <SkillsInfoCard
              heading={selectedSkill.title}
              skills={selectedSkill.skills}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
