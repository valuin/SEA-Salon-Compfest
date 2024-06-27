import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-t-neutral-900/100 p-8 flex flex-col items-center text-white bg-primary text-center">
      <div className="mb-4">
        <p className="text-3xl font-bold mb-4 text-neutral-950">Contact Us</p>
        <div className="flex justify-center space-x-8 mb-4">
          <div>
            <p className="text-xl font-semibold  text-neutral-950">Thomas</p>
            <p className="text-lg  text-neutral-950">
              <a className="">08123456789</a>
            </p>
          </div>
          <div>
            <p className="text-xl font-semibold  text-neutral-950">Sekar</p>
            <p className="text-lg  text-neutral-950">
              <a className="">08164829372</a>
            </p>
          </div>
        </div>
      </div>
      <p className="text-sm  text-neutral-950">
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