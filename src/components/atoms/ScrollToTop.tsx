// import React, { useRef } from "react";

// () => {
//   const header = useRef(null)
//   window.addEventListener('scroll', () => {
//     const scrollPos = window.scrollY
//     scrollPos > 10
//       ? header? 
//       : header?
//   })
// };

const ScrollToTop = () => {
  return (
    <a
      className="fixed z-10 rounded-xl right-5 bottom-5 block bg-orange-400 p-2"
      href="#home-banner"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          d="M13.6922 13.9746L10.3074 13.9746M13.6922 13.9746C14.1805 12.8869 14.5584 11.753 14.8204 10.5898M13.6922 13.9746L16.5128 16.7952C16.5128 16.7952 17.9118 14.7756 17.641 13.4104C17.3364 11.8873 14.8204 10.5898 14.8204 10.5898M10.3074 13.9746C9.82883 12.8956 9.46028 11.771 9.20741 10.618C8.81375 8.90978 8.86367 7.12921 9.35244 5.44569C9.8412 3.76217 10.7525 2.23168 11.9998 0.99981C13.5342 2.53422 15.7907 5.67072 14.8204 10.5898M10.3074 13.9746L7.48684 16.7952C7.48684 16.7952 6.08783 14.7756 6.3586 13.4104C6.66323 11.8873 9.1792 10.5898 9.1792 10.5898M10.3074 19.0516C10.1721 20.6086 11.9998 23.0005 11.9998 23.0005C11.9998 23.0005 13.8275 20.6086 13.6922 19.0516C13.6188 18.1772 12.8855 17.4552 11.9998 17.4608C11.5712 17.4708 11.1615 17.6387 10.8491 17.9323C10.5368 18.2259 10.3439 18.6245 10.3074 19.0516Z"
          stroke="black"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </a>
  );
};

export default ScrollToTop;
