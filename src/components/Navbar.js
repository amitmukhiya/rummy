import React from "react";
import { Link } from "react-router-dom";
import logo1 from './images/logo2.png'

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand fw-bold text-danger

"><img src={logo1} alt="Bootstrap" width="auto" height="80px" /></Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-dark">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>

              </li>
              <li className="nav-item">
                <Link to="/Privacy"
                  className="nav-link"
                >
                  Privacy & Policy
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/terms_conditions"
                  className="nav-link"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/legality"
                  className="nav-link"
                >
                  Legality
                </Link>
              </li>
            </ul>
          </div>
        </div>

      </nav>
    </>
  );
}
