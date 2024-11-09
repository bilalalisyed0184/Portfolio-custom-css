import React from "react";
import { DetailPropsType } from "../../../Types/types";
const ExperienceCard = ({ detail }: DetailPropsType) => {
  return (
    <>
      <div className="work-experience-card">
        <h6>{detail.title}</h6>
        <div className="work-duration">{detail.date}</div>
        <ul>
          {detail.responsibilities.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ExperienceCard;
