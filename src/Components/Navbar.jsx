import React, { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showSearch, setShowSearch] = useState(false);

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
            <form
              className="d-flex align-items-center position-relative"
              role="search"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                className={`form-control mx-2 search-input ${showSearch ? "d-block" : "d-none"}`}
                type="search"
                placeholder="Search here..."
                aria-label="Search"
                autoFocus={showSearch}
                style={{
                  height: "35px",
                  boxShadow: "none",
                  outline: "none",
                  transition: "all 0.3s ease",
                }}
              />
              <button
                className="btn btn-link text-white px-1"
                type="button"
                id="search-toggle"
                onClick={() => setShowSearch(!showSearch)}
              >
                <FontAwesomeIcon
                  icon={faSearch}
                  className="fa fa-search fs-4"
                />
              </button>
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
                  className="fa fa-user fs-4 me-2"
                />
              </NavLink>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="profileDropdown"
              >
                <li>
                  <li>
                    <Link className="dropdown-item" to="#">
                      Profile
                    </Link>
                  </li>
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
              to="#"
              className="options d-flex align-items-center text-decoration-none text-white"
            >
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="fa fa-shopping-Cart fs-4 me-2"
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
              <li className="ms-2">
                <ThemeToggle />
              </li>
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
