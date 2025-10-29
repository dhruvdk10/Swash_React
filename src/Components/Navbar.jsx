import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="navbar navbar-expand-lg fixed-top d-flex" id="mainNavbar">
      <div className="container-fluid">
        <div class="d-flex align-items-center">
          <NavLink className="navbar-brand ms-2 d-flex" to="/">
            <div className="logo"></div>
          </NavLink>
        </div>

        <button
          className="navbar-toggler me-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav align-items-lg-center pb-2">
            <li className="ms-2">
              <ThemeToggle />
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive && windowWidth > 991 ? "nav-link active ms-3" : "nav-link ms-3"
                }
              >
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/AboutUs"
                className={({ isActive }) =>
                  isActive && windowWidth > 991 ? "nav-link active ms-3" : "nav-link ms-3"
                }
              >
                ABOUT US
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/Shop"
                className={({ isActive }) =>
                  isActive && windowWidth > 991 ? "nav-link active ms-3" : "nav-link ms-3"
                }
              >
                SHOP
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink
                to="/Collections"
                className={({ isActive }) =>
                  (isActive || window.location.hash.includes("/Projects")) && windowWidth > 768
                    ? "nav-link dropdown-toggle active ms-3"
                    : "nav-link dropdown-toggle ms-3"
                }
                role="button"
                data-bs-toggle="dropdown"
              >
                CATEGORIES
              </NavLink>
              <ul className="dropdown-menu">
                <li>
                  <NavLink className="dropdown-item" to="/Projects/Residential">
                    Wedding
                  </NavLink>
                </li>
                <li>
                  <NavLink className="dropdown-item" to="/Projects/Commercial">
                    Modern
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className="nav-item ms-2 me-3 my-2">
              <NavLink className="btn btn-contact" to="/ContactUs">CONTACT US</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
