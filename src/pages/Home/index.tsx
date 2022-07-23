import React from "react";
import { russ_venture } from "../../assets";
import "../../assets/style/style.css";
import { CFooter, CHeader, IconContainer, ScrollToTop } from "../../components";

const index: React.FC = () => {
  return (
    <>
      <CHeader />
      <div id="sidebar"></div>
      <div
        className="min-h-[80vh] max-w-fit md:max-w-none flex flex-col items-center justify-center resize bg-center bg-cover"
        id="home-banner"
      >
        <h1 className="text-center">Mahrus Rohisyam Ushaim Sayid</h1>
        <h2 className="text-orange-400 text-center">
          Instructor Fullstack Javascript at SALT Academy
        </h2>
      </div>
      <div id="main-content" className="md:px-[15%] md:py-4 px-3">
        <h2 id="about">Overview about me</h2>
        <div className="md:flex justify-between gap-4">
          <p>
            My full name is Mahrus Rohisyam Ushaim Sayid, i was born on May 31th
            in Surabaya. I love to learn something new especially science, tech
            and psychology. My hobbies are reading, adventuring in new places,
            and sharing.
          </p>
          <img className="max-w-xs bg-cover" src={russ_venture.src} alt={russ_venture.alt} />
        </div>
        <h2>Carrier and Education</h2>
        <p>
          A little story about myself, my first career was as Informatic
          Technology support in a local company, then I became a React Native
          instructor at SALT Academy and currently i am a Fullstack JavaScript
          Instructor at SALT Academy.
        </p>
        <h2 id="contact">Contact</h2>
        <p>
          I have several social media that you can use to contact me listed
          below ! Touch me i will be glad to hear about you.
        </p>
        <div id="social-media" className="">
          <ul className="list-none flex gap-3">
            <IconContainer
              icon="Github"
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              }
            />
            <IconContainer
              icon="Linkedin"
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              }
            />
            <IconContainer
              icon="Instagram"
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              }
            />
            <IconContainer
              icon="E-Mail"
              svg={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path>
                  <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path>
                </svg>
              }
            />
          </ul>
        </div>
      </div>
      <ScrollToTop />
      <CFooter />
    </>
  );
};

export default index;
