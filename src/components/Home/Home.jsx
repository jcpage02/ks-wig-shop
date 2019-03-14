import React from "react";
import "./Home.scss";
import imageOne from "../../assets/home-one.png";
import imageTwo from "../../assets/home-back-of-head.svg";
import imageThree from "../../assets/home-front-of-head.svg";
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
          <div className="home-section-two-one-msg-header">
            <h2>Chemo is Tough.</h2>
            <h2>But I Am Tougher.</h2>
            <p>
              Declaring war on cancer comes at a cost. Approximately 65% of
              cancer patients lose their hair after chemo. You are a survivor -
              strong and beautiful. Your wig should complement you beauty, not
              distract from it.
            </p>
          </div>
        </div>
        <div className="home-section-two-two">
          <div className="home-section-two-two-msg">
            <img
              className="home-image-two"
              src={imageTwo}
              alt="back of woman's head"
            />
            <div className='home-section-two-two-text'>
              <h2>Naturally Natural.</h2>
              <p>
                Finding a wig that matches your style and looks natural can feel
                daunting. Don’t worry, we’re here to help. We have a variety of
                modern synthetic and human hair styles that wear naturally and
                express your individuality. Move over, nana’s bulbous bouffant -
                mama’s ready for a night on the town.
              </p>
            </div>
            </div>
            <img
              className="home-image-three"
              src={imageThree}
              alt="front of woman's head"
            />
        </div>
      </section>
    </div>
  );
}
