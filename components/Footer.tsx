import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-neutral-950 text-center text-xs">
      <p>
        Made by{" "}
        <a
          href="https://www.linkedin.com/in/valtrizt/"
          target="_blank"
          className="font-bold hover:underline"
          rel="noreferrer"
        >
          Valtrizt
        </a>
      </p>
    </footer>
  );
};

export default Footer;