import React from "react";

const TwitterX = (props) => (
<svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden {...props}>
<path d="M18.244 2H21l-6.5 7.43L22 22h-6.9l-4.52-6.03L4.5 22H2l7.04-8.04L2 2h6.9l4.2 5.6L18.244 2Zm-2.42 18h2.38L8.24 4H5.86l9.964 16Z"/>
</svg>
);


const LinkedIn = (props) => (
<svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden {...props}>
<path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.05h.05C12.5 8.9 14.4 8 16.6 8 21 8 23 10.6 23 15.1V23h-4v-6.5c0-1.55-.03-3.55-2.2-3.55-2.2 0-2.55 1.7-2.55 3.45V23h-4V8z"/>
</svg>
);


const Instagram = (props) => (
<svg viewBox="0 0 24 24" fill="currentColor" className="size-5" aria-hidden {...props}>
<path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5Zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5ZM18 6.75a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 18 6.75Z"/>
</svg>
);

const Footer = () => {
  return (
    <footer className="border-t  border-neutral-200 dark:border-neutral-800">
      <div className="py-8 px-8 flex flex-col md:flex-row items-center gap-4 justify-between">
        <div className="flex items-center gap-4">
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X" className="hover:opacity-80">
            <TwitterX />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:opacity-80">
            <LinkedIn />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-80">
            <Instagram />
          </a>
        </div>
        
        <p className="text-sm sm:text-center text-neutral-600 dark:text-neutral-400">
          Copyright © 2020 - {new Date().getFullYear()}. Othuke | All rights reserved<a href="#home" className="underline decoration-dotted">
            
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
