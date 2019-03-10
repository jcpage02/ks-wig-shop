import React from "react";
import "./Home.scss";
import imageOne from "../../assets/f81735e6a14d136a57a7b18edbc20e2f.svg";
import downArrow from "../../assets/Group 1.svg";
import Header from "./Header";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <section id="home-section-one">
        <img
          className="home-section-one-img"
          src={imageOne}
          alt="girl without hair main"
        />
        <div className="home-section-one-footer">
          <img
            className="home-section-one-down-arrow"
            src={downArrow}
            alt="down"
          />
        </div>
        <div className="home-section-one-msg">
          <p>Beautiful. Warrior.</p>
        </div>
      </section>
      <section id="home-section-two">
        <div className="home-section-two-one">
          <div  className='home-section-two-msg-header'>
            <h2>Chemo is Tough.</h2>
            <h2>But I Am Tougher.</h2>
          </div>
        </div>
        <div className="home-section-two-two" />
      </section>
    </div>
  );
}
