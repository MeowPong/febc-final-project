import React from "react";
import WebLogo from "../assets/WebLogo.svg";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "../contexts/ThemeContext";
import DarkModeIcon from "../assets/Material_Icon/dark_mode_icon.svg";
import LightModeIcon from "../assets/Material_Icon/light_mode_icon.svg";

function Navbar() {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="navbar BG-Main fixed-top navbar-expand-lg">
      <div className="container">
        <Link to="/" className="navbar-brand">
          <img src={WebLogo} alt="web logo" style={{ width: "12rem" }} />
        </Link>

        <button
          className="navbar-toggler shadow-none border-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
        >
          <div className="offcanvas-header">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-center flex-grow-1 pe-3">
              <li className="nav-item">
                <Link to="/" className="nav-link active fs-5">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <button className="nav-link fs-5">
                  Blog
                </button>
              </li>
              <li className="nav-item">
                <Link to="/ContactUs" className="nav-link fs-5">
                  Contact Us
                </Link>
              </li>
            </ul>

            <div className=" d-flex justify-contents-space-between">
              <div
                className="d-flex justify-contents-center align-items-center mx-5"
                onClick={toggleTheme}
              >
                {theme === "light" ? (
                  <img
                    src={LightModeIcon}
                    alt="Light icon"
                    style={{ width: "2rem" }}
                  />
                ) : (
                  <img
                    src={DarkModeIcon}
                    alt="Dark icon"
                    style={{ width: "2rem" }}
                  />
                )}
              </div>

              {isAuthenticated ? (
                <div className="dropdown">
                  <div
                    className="dropdown-toggle bg-transparent d-flex align-items-center justify-contents-center"
                    type="button"
                    data-bs-toggle="dropdown"
                  >
                    <div className="container-fluid">
                      <div className="ms-auto d-flex align-items-center">
                        <span className="me-2 fs-5">Teddy</span>
                        <div
                          className={theme === "light" ? (
                            "rounded-circle bg-secondary-subtle d-flex justify-content-center align-items-center text-white fs-5"
                          ) : (
                            "rounded-circle bg-secondary d-flex justify-content-center align-items-center text-white fs-5"
                          )}
                          style={{ width: "40px", height: "40px" }}
                        >
                          T
                        </div>
                      </div>
                    </div>
                  </div>
                  <ul className="dropdown-menu">
                    <li>
                      <button className="dropdown-item">
                        Profile
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item">
                        My courses
                      </button>
                    </li>
                    <li>
                      <hr className="dropdown-divider" />
                    </li>
                    <li>
                      <button className="dropdown-item">Sign out</button>
                    </li>
                  </ul>
                </div>
              ) : (
                <div className="d-flex justify-content-center align-items-center text-center gap-3">
                  <Link
                    to="/SignIn"
                    className="btn btn-outline-primary fs-5 rounded-pill px-3"
                  >
                    Sign in
                  </Link>
                  <Link
                    to="/SignUp"
                    className="btn btn-primary fs-5 rounded-pill px-3"
                  >
                    Sign up
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;


