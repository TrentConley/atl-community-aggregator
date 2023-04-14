import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-blue-500 text-white py-4 text-center justify-center">
      <div className="container mx-auto px-4 flex justify-center items-center h-16">
        <Link href="/">
          <h1 className="font-bold text-xl cursor-pointer flex-grow text-center">
            Logo
          </h1>
        </Link>

        <nav className="space-x-4 flex-grow text-center">
          <Link href="/">
            <h1 className="hover:text-blue-300 cursor-pointer flex-1">Home</h1>
          </Link>
          <Link href="/about">
            <h1 className="hover:text-blue-300 cursor-pointer flex-1">About</h1>
          </Link>
          <Link href="/contact">
            <h1 className="hover:text-blue-300 cursor-pointer flex-1">
              Contact
            </h1>
          </Link>
        </nav>

        <div className="space-x-4 flex-grow text-center">
          <Link href="/login">
            <h1 className="bg-white text-blue-500 hover:bg-blue-300 hover:text-white px-4 py-2 rounded cursor-pointer flex-1">
              Login
            </h1>
          </Link>
          <Link href="/register">
            <h1 className="bg-white text-blue-500 hover:bg-blue-300 hover:text-white px-4 py-2 rounded cursor-pointer flex-1">
              Register
            </h1>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
