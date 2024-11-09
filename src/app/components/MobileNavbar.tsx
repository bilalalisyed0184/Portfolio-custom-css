"use client";
import React from "react";
import Link from "next/link";
import { MobileNavbarTypes } from "../../../Types/types";
const MobileNavbar = ({ isOpen, toggleMenu }: MobileNavbarTypes) => {
  return (
    <>
      <div
        className={`mobile-nav-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-nav-container">
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
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
