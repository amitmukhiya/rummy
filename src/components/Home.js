import React from "react";
import img1 from "./images/main3.png";
import "./Button.css";
import Home2 from "./Home2";
import Main from "./Main";

export default function Home() {
  return (
    <>
      <div className="container-1 d-flex justify-content-around flex-wrap-wrap">
        <div className="rummy" style={{ flexBasis: "50%" }}>
          <img
            className="rummy_img"
            src={img1}
            alt=""
            width="100%"
            height="auto"
          />
        </div>
        <div
          className="download d-flex flex-column px-2"
          style={{ flexBasis: "40%" }}
        >
          <h2 className="fs-1 text-light">Download & Play Rummy Online</h2>
          <div className="wrap">
            <a href="https://download-rummy-app.s3.ap-south-1.amazonaws.com/PlayRummy.apk" className="animated-button" type="button">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Download
            </a>
          </div>
          <p className="fs-4 py-3">
            Download The India's Best,100% Safe, Secure Rummy App and play
            against Real-Time Players and Earn Real Money.
          </p>
        </div>
      </div>
      <Main />
      <Home2 />
    </>
  );
}
