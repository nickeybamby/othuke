import React from "react";
import BookStack from "../assets/stackofbooks.png";
import bgImage1 from "../assets/bgImage1.png"; 
import bgImage2 from "../assets/bgImage2.png"; 

const Hero = ({ theme }) => {
  return (
    <div
      id="hero"
      className="relative flex flex-col items-center gap-6 py-20 px-4 sm:px-8 lg:px-16 xl:px-32 text-center w-full overflow-hidden text-gray-700 dark:text-gray-200"
    >
      {/* Hero content */}
      <h1 className="flex flex-col text-4xl xl:text-[84px] sm:text-5xl md:text-6xl font-semibold xl:leading-[95px] max-w-5xl gap-3">
        Every book is a journey,
        <span>Begin yours here.</span>
      </h1>

      <p className="text-sm sm:text-lg font-medium text-gray-500 dark:text-white/75 max-w-4/5 sm:max-w-lg pb-3">
        As an author and publisher, I dedicate myself to crafting my own tales
        while supporting writers on their path to publication.
      </p>

      {/* Image + right content */}
      <section className="relative">
        <div className="header__image">
          <div className="header__image-contents flex flex-col sm:flex-row items-center gap-6">
            {/* Left: Image */}
            <div className="w-[300px] image-container">
              <div className="header__image-img aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-neutral-800">
                <img
                  src={BookStack}
                  alt="Stack of books"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right: Content */}
            <div className="right-content flex flex-col justify-center items-start gap-4 max-w-xl lg:pl-6">
              <h2 className="text-xl md:text-2xl font-semibold text-yellow-400 mb-4 text-left">
                Latest books
              </h2>
              <p className="text-lg md:text-xl leading-relaxed mb-6 italic text-left text-white/70">
                <span className="inline-block border-l-4 border-yellow-400 pl-3 rounded-xl">
                  “I was told books don’t sell here. I knew it wasn’t true.”
                </span>
              </p>
              <a
                href="https://masobebooks.com/ng/bookstore/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="self-start inline-flex gap-2 rounded-xl bg-purple-600 hover:bg-purple-700 active:translate-y-[1px] transition duration-300 px-5 py-2.5 text-sm font-semibold shadow-md text-white/70">
                  Visit Bookstore
                </button>
              </a>
            </div>
          </div>
        </div>

        {/* Background image (theme controlled) */}
        <img
          src={theme === "dark" ? bgImage1 : bgImage2}
          alt="decorative background"
          className="absolute -top-[100px] -right-[90px] w-[400px] sm:w-[400px] opacity-70 z-0 transition-all duration-500"
        />
      </section>
    </div>
  );
};

export default Hero;
