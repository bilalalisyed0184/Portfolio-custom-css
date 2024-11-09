"use client";
import React, { useRef } from "react";
import ExperienceCard from "./ExperienceCard";
import { WORK_EXPERIENCE } from "../utils/data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "boxicons/css/boxicons.min.css";
import { WorkExperienceTypes } from "../../../Types/types";
const WorkExperience = () => {
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    sliderRef.current?.slickNext();
  };
  const slideLeft = () => {
    sliderRef.current?.slickPrev();
  };
  return (
    <section className="experience-container" id="experience">
      <h5>Work Experience</h5>
      <div className="experience-content">
        <div className="arrow-right" onClick={slideRight}>
          <span className="">
            <i className="bx bxs-chevron-right"></i>
          </span>
        </div>
        <div className="arrow-left" onClick={slideLeft}>
          <span className="">
            <i className="bx bxs-chevron-left"></i>
          </span>
        </div>
        <Slider ref={sliderRef} {...settings}>
          {WORK_EXPERIENCE.map((item: WorkExperienceTypes) => (
            <ExperienceCard key={item.title} detail={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default WorkExperience;
