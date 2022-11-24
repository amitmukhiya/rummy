import React from "react";
import img1 from "./images/main.png";
import "./Button.css";
import circle from "./images/circle.png";

export default function Home() {
  return (
    <>
      <div className="container-1 d-flex justify-content-around flex-wrap-wrap">
        <div className="rummy" style={{ flexBasis: "52%" }}>
          <img
            className="rummy_img"
            src={img1}
            alt=""
            srcset=""
            width="100%"
            height="auto"
          />
        </div>
        <div
          className="download d-flex flex-column"
          style={{ flexBasis: "35%" }}
        >
          <h2 className="fs-1 text-light">Download & Play Rummy Online</h2>
          <div className="wrap">
            <a href="@" className="animated-button" type="button">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Download
            </a>
          </div>
          <p className="fs-5 py-3">
            Download The India's Best,100% Safe, Secure Rummy App and play
            against Real-Time Players and Earn Real Money.
          </p>
        </div>
      </div>
    </>
  );
}
