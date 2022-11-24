import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="/">
            Rummy
          </a>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://sites.google.com/view/entwikrummyprivacypolicy/home"
                >
                  Privacy & Policy
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="https://sites.google.com/view/entwik-rummy-termconditions/home"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
