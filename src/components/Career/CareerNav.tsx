import React, { useState } from "react";
import "./Navbar.css";
import { HiOutlineMenu } from "react-icons/hi";

const CareerNav: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    console.log("Before update:", showMenu);
    setShowMenu(!showMenu);
    console.log("After update:", showMenu);
  };

  return (
    <div className="header">
      <div className="logo">
        <a href="https://careers.meristemng.com" target="_blank">
          <img
            className="img-fluid"
            src="https://careers.meristemng.com/img/logo.svg"
            width={200}
            alt="Meristem Logo"
          />
        </a>
        <div className="home-icon">
          <a href="https://careers.meristemng.com" className="hommie1">
            <img
              src="https://careers.meristemng.com/img/home_btn.svg"
              alt="Home"
            />
          </a>
          <a href="https://careers.meristemng.com" className="hommie2">
            <img
              src="https://careers.meristemng.com/img/home_inner.svg"
              className="mt-3 home_2 img-fluid"
              width="40"
              alt="Home"
            />
          </a>
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <button
        className={`toggle-menu-button ${showMenu ? "active" : ""}`}
        onClick={handleToggleMenu}
      >
        <HiOutlineMenu />
      </button>

      <nav className={`navbar-mobile ${showMenu ? "show-menu" : ""}`}>
        <ul className="menu-mobile-main-menu">
          <li className="nav-item">
            <a
              className="nav-link active"
              href="https://careers.meristemng.com/job-list/student-graduates"
            >
              Students and Graduates
              <br />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://careers.meristemng.com/job-list/professional"
            >
              Professional
              <br />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://careers.meristemng.com/how-we-hire"
            >
              How We Hire
              <br />
            </a>
          </li>
        </ul>
      </nav>

      {/* Desktop Menu */}
      <nav className="navbar">
        <ul className="nav-ul">
          <li className="nav-item">
            <a
              className="nav-link active"
              href="https://careers.meristemng.com/job-list/student-graduates"
            >
              Students and Graduates
              <br />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://careers.meristemng.com/job-list/professional"
            >
              Professional
              <br />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://careers.meristemng.com/how-we-hire"
            >
              How We Hire
              <br />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default CareerNav;
