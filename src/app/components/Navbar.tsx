"use client";
import React, { useState } from "react";
import "boxicons/css/boxicons.min.css";
import MobileNavbar from "./MobileNavbar";
import Link from "next/link";
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      <MobileNavbar isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <div className="nav-logo">
            <h1>
              Syed bilal<span>.</span>
            </h1>
          </div>
          <ul>
            <li>
              <Link href="#home" className="nav-menu-item">
                Home
              </Link>
            </li>
            <li>
              <Link href="#skills" className="nav-menu-item">
                Skills
              </Link>
            </li>
            <li>
              <Link href="#experience" className="nav-menu-item">
                Experience
              </Link>
            </li>
            <li>
              <Link href="#contact" className="nav-menu-item">
                Contact
              </Link>
            </li>
            <button className="nav-contact-btn" onClick={() => {}}>
              Hire Me
            </button>
          </ul>
          <button className="nav-menu-button" onClick={toggleMenu}>
            {openMenu ? (
              <i className="bx bx-x"></i>
            ) : (
              <i className="bx bx-menu"></i>
            )}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
