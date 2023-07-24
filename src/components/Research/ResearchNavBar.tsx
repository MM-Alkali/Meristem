import { useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import "./Navbar.css";


const ResearchNavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [header, setHeader] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setHeader(true);
    } 
    else {
      setHeader(false)
    }
  }
  window.addEventListener('scroll', changeBackground);

  

  const handleToggleMenu = () => {
    console.log("Before update:", showMenu);
    setShowMenu(!showMenu);
    console.log("After update:", showMenu);
  };
  
  

  return (
    <div className={`header ${header ? 'bg-white' : 'bg-transparent'}`}>
      {/* Logo */}
      <div className="title-logo-wrapper">
        <a
          className="navbar-brand"
          href="https://research.meristemng.com/"
          title="Meristem Research"
        >
          <img
            src="https://research.meristemng.com/wp-content/uploads/2021/01/2.png"
            alt="Meristem Research"
          />
        </a>
      </div>

      {/* Mobile Menu Icon */}
      <button
  className={`toggle-menu-button ${showMenu ? "active" : ""}`}
  onClick={handleToggleMenu}
>
  <HiOutlineMenu />
</button>


      {/* Mobile Menu */}
      <nav className={`navbar-mobile ${showMenu ? "show-menu" : ""}`}>
        <ul className="menu-mobile-main-menu">
          <li>
            <a
              href="https://research.meristemng.com/trainings/"
              className="menu-item"
            >
              TRAINING
            </a>
          </li>
          <li>
            <a
              href="https://research.meristemng.com/reports/"
              className="menu-item"
            >
              REPORTS
            </a>
          </li>
          <li>
            <a
              href="https://research.meristemng.com/contact-us/"
              className="menu-item"
            >
              CONTACT US
            </a>
          </li>
        </ul>
      </nav>

      {/* Desktop Menu */}
      <nav className="navbar-desktop">
        <ul className="menu-main-menu">
          <li>
            <a
              href="https://research.meristemng.com/trainings/"
              className="menu-item"
            >
              TRAINING
            </a>
          </li>
          <li>
            <a
              href="https://research.meristemng.com/reports/"
              className="menu-item"
            >
              REPORTS
            </a>
          </li>
          <li>
            <a
              href="https://research.meristemng.com/contact-us/"
              className="menu-item"
            >
              CONTACT US
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ResearchNavBar;
