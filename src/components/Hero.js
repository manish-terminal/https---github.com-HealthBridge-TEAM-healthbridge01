import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-container mx-auto p-4 md:p-6 lg:p-8 xl:p-10 max-w-full relative">
      <div className="background w-full h-full flex items-center justify-center p-4 md:p-6 lg:p-8 xl:p-10 relative">
        {/* Overlay Text */}
        <div className="overlay-text absolute top-12 left-4 max-w-xs md:max-w-md lg:max-w-lg xl:max-w-xl text-left text-2xl">
          <p className="text-white text-2xl md:text-lg lg:text-2xl xl:text-2xl font-bold leading-tight ">
            Global Medical Excellence, Tailored to Your Needs—Anywhere, Anytime.
          </p>
        </div>

        {/* Button */}
        <Link
          to="/signup"
          className="btn btn-warning flex items-center space-x-2 px-4 py-2 text-center text-base md:text-lg lg:text-xl xl:text-2xl rounded-lg shadow-md transition-transform transform hover:scale-105 absolute right-4 top-1/2 transform -translate-y-1/2"
        >
          <span>Start your journey</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-2 w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
