import React from "react";
import logo from "../assets/logo.png"; // ✅ Make sure logo is here: src/assets/logo.png

const Footer = () => {
  return (
    <section className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* About */}
          <div>
            <div className="mb-4">
              <a href="#">
                <img src={logo} alt="Logo" className="w-32" />
              </a>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua endisse ultrices gravida lorem.
            </p>
            <div className="flex space-x-4 text-gray-400">
              <a href="#" className="hover:text-red-500"><i className="fa fa-facebook"></i></a>
              <a href="#" className="hover:text-red-500"><i className="fa fa-twitter"></i></a>
              <a href="#" className="hover:text-red-500"><i className="fa fa-youtube-play"></i></a>
              <a href="#" className="hover:text-red-500"><i className="fa fa-instagram"></i></a>
              <a href="#" className="hover:text-red-500"><i className="fa fa-envelope-o"></i></a>
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Useful Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-red-500">About</a></li>
              <li><a href="#" className="hover:text-red-500">Blog</a></li>
              <li><a href="#" className="hover:text-red-500">Classes</a></li>
              <li><a href="#" className="hover:text-red-500">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-red-500">Login</a></li>
              <li><a href="#" className="hover:text-red-500">My Account</a></li>
              <li><a href="#" className="hover:text-red-500">Subscribe</a></li>
              <li><a href="#" className="hover:text-red-500">Contact</a></li>
            </ul>
          </div>

          {/* Tips & Guides */}
          <div>
            <h4 className="font-bold text-lg mb-4">Tips & Guides</h4>
            <div className="space-y-5">
              <div>
                <h6 className="text-gray-300 hover:text-red-500 cursor-pointer text-sm font-semibold">
                  Physical fitness may help prevent depression, anxiety
                </h6>
                <ul className="flex text-xs text-gray-500 space-x-3 mt-1">
                  <li>3 min read</li>
                  <li>20 Comments</li>
                </ul>
              </div>
              <div>
                <h6 className="text-gray-300 hover:text-red-500 cursor-pointer text-sm font-semibold">
                  Fitness: The best exercise to lose belly fat and tone up...
                </h6>
                <ul className="flex text-xs text-gray-500 space-x-3 mt-1">
                  <li>3 min read</li>
                  <li>20 Comments</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-700 pt-6">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} All rights reserved | Made with{" "}
            <i className="fa fa-heart text-red-500"></i> by{" "}
            <a href="https://colorlib.com" target="_blank" rel="noreferrer" className="text-red-500 hover:underline">
              Colorlib
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
