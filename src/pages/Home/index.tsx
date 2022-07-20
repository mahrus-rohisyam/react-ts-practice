import React from "react";
import "../../assets/style/style.css";

const index: React.FC = () => {
  return (
    <>
      <header>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </header>
      <div id="sidebar"></div>
      <div id="main-content">
        <h1>Mahrus Rohisyam Ushaim Sayid</h1>
        <h2>Instructor Fullstack Javascript at SALT Academy</h2>
        <p>
          My full name is Mahrus Rohisyam Ushaim Sayid, i was born on May 31th
          in Surabaya. I love to learn something new especially science, tech
          and psychology. My hobbies are reading, adventuring in new places, and
          sharing.
        </p>
        <p>
          A little story about myself, my first career was as Informatic
          Technology support in a local company, then I became a React Native
          instructor at SALT Academy and currently i am a Fullstack JavaScript
          Instructor at SALT Academy.
        </p>
      </div>
      <footer className="glass">
      <p id="credit">Created with 🧠&⚡ <br/><a href="/">Mahrus Sayid</a> &copy; 2022</p>
      </footer>
    </>
  );
};

export default index;
