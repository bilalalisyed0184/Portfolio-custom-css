import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <>
      <section className="hero-container" id="home">
        <div className="hero-content">
        <h2>Crafting Inspiring Digital Experiences</h2>
<p>
  As a dedicated frontend developer, I specialize in transforming creative concepts into visually stunning and highly functional web applications. With expertise in modern web technologies and a keen eye for design, I deliver seamless, responsive user experiences across all devices. Committed to clean, efficient code, I excel in collaborative settings, continuously striving to exceed user expectations and drive digital innovation.
</p>
        </div>
        <div className="hero-image">
          <div>
            <div className="tech-icon">
              <Image
                src="/react.jpg"
                alt="react-logo"
                height={120}
                width={120}
              />
            </div>
            <Image
              src="/main-image.jpeg"
              alt="profile-image"
              height={400}
              width={400}
              className="profile-image"
            />
          </div>
          <div>
            <div className="tech-icon">
              <Image src="/html.jpg" alt="html-logo" height={120} width={120} />
            </div>
            <div className="tech-icon">
              <Image src="/css.jpg" alt="css-logo" height={120} width={120} />
            </div>
            <div className="tech-icon">
              <Image
                src="/javascript.jpg"
                alt="javascript-logo"
                height={120}
                width={120}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
