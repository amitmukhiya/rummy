import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div>
        <footer>
          <div className="ft-main">
            <div className="policy py-1 my-1">
              <Link to="/Privacy"
                className="px-5"
              >
                Privacy & Policy
              </Link>
              <Link to="/terms_conditions"
                className="px-5"
              >
                Terms & Conditions
              </Link>
              <Link to="/legality"
                className="px-5"
              >
                Legality
              </Link>
            </div>
            <div className="contact">
              <h4 className="text-warning my-2">
                For any query, Feel free to contact us and we will get back to
                you with solution.
              </h4>
              <p className="email px-4 py-1 my-3">team.entwik@gmail.com</p>
            </div>
          </div>
          <hr />
          {/* Footer legal */}
          <div className="ft-legal">
            <p className="fs-5">
              © 2020 - 2022 ENTWIK RUMMY ALL RIGHTS RESERVED
            </p>
            <p className="fs-6">
              You should be 18 years older or above to use this platform. This
              platform may not be used by residents of Assam, Odisha, Nagaland,
              Sikkim, Tamil Nadu , Andhra Pradesh and Telangana. Further there
              may be certain restrictions in some additional states.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
}
