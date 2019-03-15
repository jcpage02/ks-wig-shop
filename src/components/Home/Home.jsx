import React from "react";
import "./Home.scss";
import imageOne from "../../assets/home-one.png";
import imageTwo from "../../assets/home-back-of-head.svg";
import imageThree from "../../assets/home-front-of-head.svg";
import imageFour from "../../assets/home-two.png";
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
            <div className="home-section-two-two-text">
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
      <section id="home-section-three">
        <img src={imageFour} alt="bald woman empowered" />
        <h2>Wig Wizardry.</h2>
        <p>
          Using an intimate, personalized selection process, Kailee all help you
          select the perfect wig that captures your personal style, meets your
          unique individual needs and stays within your budget. Coupled with her
          expert care and maintenance tips, your wig will stay healthy and
          beautiful for years to come.{" "}
        </p>
        <h4>BOOK AN APPOINTMENT</h4>
      </section>
      <section id="home-footer">
        <div className="home-footer-left">
          <p>
            FOLLOW US ON{" "}
            <a href="https://www.facebook.com/kswigshop/">FACEBOOK</a> AND{" "}
            <a href="https://www.instagram.com/kswigshop/?hl=en">INSTAGRAM</a>
          </p>
        </div>
        <div className="home-footer-center">
          <div className="home-footer-center-top">
            <p>1090 E 30th STREET OGDEN, UT 84403</p>
            <p id="home-footer-phone">801-388-4944</p>
          </div>
          <div className="home-footer-center-bottom">
            <p>COPYRIGHT 2019 K’S WIGSHOP. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
        <div className="home-footer-right">
          <p>CRAFTER BY PXLFOX</p>
        </div>
      </section>
    </div>
  );
}
