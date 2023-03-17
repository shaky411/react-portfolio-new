import React from "react";

function Footer() {
  return (
    <footer className="flex justify-center items-center p-4 bg-slate-200 bg-opacity-50 rounded-none shadow md:p-6 fixed bottom-0 left-0 w-screen h-12">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2023 All Rights Reserved.
      </span>
      <a href="https://github.com/shaky411" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github ml-2 text-gray-400 hover:text-indigo-500 text-2xl"></i></a>
      <a href="https://twitter.com/swiftgekko" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter ml-2 text-gray-400 hover:text-indigo-500 text-2xl"></i></a>
      <a href="https://www.linkedin.com/in/marcnorris1984" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin ml-2 text-gray-400 hover:text-indigo-500 text-2xl"></i></a>
    </footer>
  );
}

export default Footer;
