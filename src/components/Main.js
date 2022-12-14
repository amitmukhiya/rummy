import React from "react";
import "./Button.css";
import upi from "./images/upi.webp";
import bank from "./images/bank.webp";

export default function Main() {
  return (
    <>
      <div className="container">
        <div className="container-2 py-4 " style={{ textAlign: "center" }}>
          <h2>WITHDRAW WINNINGS WITH</h2>
          <div className="poker">
            <div className="payment">
              <div className="upi">
                <img src={upi} alt="" />
              </div>
              <div className="bank">
                <img src={bank} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="component-3 py-2" style={{ textAlign: "center" }}>
          <div className="details ">
            <h2 style={{ alignItems: "center" }}>
              Best In Class Gaming Experience
            </h2>
            <div className="details-1 d-flex justify-content-center flex-wrap">

              <div>
                <img src={require("./images/secure.webp")} alt="" />
                <div>
                  <p>
                    100% Secure & <br />
                    Legal
                  </p>
                </div>
              </div>
              <div>
                <img src={require("./images/offer.webp")} alt="" />
                <div>
                  <p>
                    Upto 2000 <br />
                    Signup Bonus
                  </p>
                </div>
              </div>
              <div>
                <img src={require("./images/24x7.webp")} alt="" />
                <div>
                  <p>
                    Fast & Active Customer <br /> Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
