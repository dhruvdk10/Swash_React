import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faHeart, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
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
    <>
      {/* 🔹 Top Navbar (Fixed) */}
      <nav className="navbar navbar-expand-lg fixed-top d-flex" id="mainNavbar">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <NavLink className="navbar-brand d-flex" to="/">
              <div className="logo"></div>
            </NavLink>
          </div>

          <div className="d-flex align-items-center">
            {/* Search */}
            <ThemeToggle />
            <form
              className="d-flex align-items-center position-relative"
              role="search"
              onSubmit={(e) => e.preventDefault()}
            >
              <FontAwesomeIcon
                icon={faSearch}
                className="fa fa-search fs-4 ms-1"
                data-bs-toggle="modal"
                data-bs-target="#searchModal"
                style={{ cursor: "pointer" }}
              />
            </form>

            {/* Profile Dropdown */}
            <div className="dropdown ps-1">
              <NavLink
                to="#"
                className="options d-flex align-items-center text-decoration-none text-white"
                id="profileDropdown"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <FontAwesomeIcon
                  icon={faUser}
                  className="fa fa-user fs-4 mx-1"
                />
              </NavLink>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="profileDropdown"
              >
                <li>
                  <Link className="dropdown-item" to="#">
                    Profile
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/login"
                    data-bs-toggle="modal"
                    data-bs-target="#myModal"
                  >
                    Log In
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="#">
                    Sign Out
                  </Link>
                </li>
              </ul>
            </div>
            <NavLink
              className="options d-flex align-items-center text-decoration-none text-white"
            >
              <FontAwesomeIcon
                icon={faHeart}
                className="fa fa-heart fs-4 mx-1"
              />
            </NavLink>
            <NavLink
              className="options d-flex align-items-center text-decoration-none text-white"
            >
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="fa fa-shopping-Cart fs-4 mx-1"
              />
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="seprator"></div>

      {/* 🔸 Bottom Navbar (Not Fixed) */}
      <nav className="navbar navbar-expand-lg d-flex">
        <div className="container-fluid">
          <button
            className="navbar-toggler ms-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse justify-content-start"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav align-items-lg-center pb-2">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive && windowWidth > 991
                      ? "nav-link active ms-3"
                      : "nav-link ms-3"
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/AboutUs"
                  className={({ isActive }) =>
                    isActive && windowWidth > 991
                      ? "nav-link active ms-3"
                      : "nav-link ms-3"
                  }
                >
                  ABOUT US
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/Shop"
                  className={({ isActive }) =>
                    isActive && windowWidth > 991
                      ? "nav-link active ms-3"
                      : "nav-link ms-3"
                  }
                >
                  SHOP
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                <NavLink
                  to="/Collections"
                  className={({ isActive }) =>
                    (isActive || window.location.hash.includes("/Projects")) &&
                      windowWidth > 768
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
                <NavLink className="btn btn-contact" to="/ContactUs">
                  CONTACT US
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
