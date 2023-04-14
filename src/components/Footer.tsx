import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-blue-500 text-white py-4 mt-8">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <nav className="space-x-4 flex">
          <Link href="/privacy-policy">
            <div className="hover:text-blue-300 cursor-pointer">
              Privacy Policy
            </div>
          </Link>
          <Link href="/terms-of-service">
            <div className="hover:text-blue-300 cursor-pointer">
              Terms of Service
            </div>
          </Link>
        </nav>

        <div className="space-x-4 flex">
          {/* Replace # with actual social media links */}
          <div className="hover:text-blue-300 cursor-pointer">
            <i className="fab fa-facebook"></i>
          </div>
          <div className="hover:text-blue-300 cursor-pointer">
            <i className="fab fa-twitter"></i>
          </div>
          <div className="hover:text-blue-300 cursor-pointer">
            <i className="fab fa-instagram"></i>
          </div>
        </div>

        <p>&copy; {new Date().getFullYear()} Your Company</p>
      </div>
    </footer>
  );
};

export default Footer;
