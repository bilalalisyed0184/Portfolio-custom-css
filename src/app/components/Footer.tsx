import React from "react";
import "boxicons/css/boxicons.min.css";
import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div className="footer-bottom-container">
        <Link href="https://github.com/bilalalisyed0184">
          <i className="bx bxl-github footer-icon"></i>
        </Link>
        <Link href="https://www.instagram.com/cyb3r.syed_bilal_ali/?__pwa=1">
          <i className="bx bxl-instagram-alt footer-icon"></i>
        </Link>
        <Link href="https://www.linkedin.com/in/syed-bilal-948bb1270/">
          <i className="bx bxl-linkedin footer-icon"></i>
        </Link>
      </div>
      <div className="footer">&copy; 2024 Syed Bilal Ali | Empowering Visionaries, Inspiring Coders.</div>
    </>
  );
};
export default Footer;
