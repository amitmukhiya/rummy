import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <>
      <div>
        <footer>
          <div className="ft-main">
            <div className="policy py-1 my-1">
              <a
                className="px-5"
                href="https://sites.google.com/view/entwikrummyprivacypolicy/home"
              >
                Privacy Policy
              </a>
              <a href="https://sites.google.com/view/entwik-rummy-termconditions/home">
                Terms and Conditions
              </a>
            </div>
            <div className="contact">
              <h4 className="text-warning">
                For any query, Feel free to contact us and we will get back to
                you with solution.
              </h4>
              <p className="email px-4 py-1 my-1">team.entwik@gmail.com</p>
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
