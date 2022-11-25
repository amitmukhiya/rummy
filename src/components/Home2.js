import React from "react";
import img2 from "./images/4a.png";
import "./Button.css";

export default function Home_second() {
  return (
    <>
      <div className="container-1 d-flex justify-content-around flex-wrap-wrap home2">
        <div
          className="download d-flex flex-column px-2"
          style={{ flexBasis: "40%" }}
        >
          <p className="fs-2 py-3">Explore the Best Rummy Game</p>
          <h2 className="fs-1 text-light">
            Get Your Free Download Of Rummy App TODAY!
          </h2>
          <div className="wrap">
            <a href="@" className="animated-button" type="button">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Download
            </a>
          </div>
        </div>
        <div className="rummy" style={{ flexBasis: "50%" }}>
          <img
            className="rummy_img rummy_img2"
            src={img2}
            alt=""
            srcset=""
            width="70%"
            height="auto"
          />
        </div>
      </div>
    </>
  );
}
