import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.jpg";
import "./App.scss";

function App() {
  return (
    <>
      <header className="header">
        <img className="header__logo" src={logo} alt="logo" />
        <nav className="header__nav">
          <ul className="header__lists">
            <li className="header__list">Home</li>
            <li className="header__list">Contact</li>
            <li className="header__list">All Question List</li>
          </ul>
        </nav>
      </header>

      <main className="question">
        <label className="question__label" for="">
          Question
        </label>
        <p>Question Holder Here</p>
        <ul className="question__lists">
          <button className="question__button">
            <li className="question__list">Answer 1</li>
          </button>
          <button className="question__button">
            <li className="question__list">Answer 2</li>
          </button>
          <button className="question__button">
            <li className="question__list">Answer 3</li>
          </button>
          <button className="question__button">
            <li className="question__list">Answer 4</li>
          </button>
        </ul>
      </main>

      <footer className="footer">
        <div className="footer__left">
          {/* <Link className="footer__link" to="/"> */}
          <img className="footer__logo" src={logo} alt="logo" />
          <h3 className="footer__logo-text">Be Smart</h3>
          {/* </Link> */}
        </div>

        <div className="footer__mid">
          <p className="footer__text">Make Your Smarter Inc.</p>
          <p className="footer__text">
            <a className="footer__number" href="tel:">
              1-778-888-8888
            </a>
          </p>
          <p className="footer__text">Vancouver, BC</p>
        </div>

        <div className="footer__right">
          <ul className="footer__links">
            <li className="footer__item">Home</li>
            <li className="footer__item">Contact</li>
            <li className="footer__item">All Question List</li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default App;
