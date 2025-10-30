import React from "react";
// import Breadcrumb from "../components/Breadcrumb"; // optional if you want a breadcrumb section
import mapImage from "../assets/breadcrumb-bg.jpg";
import Footer from "../component/Footer";
import GetInTouch from "../component/GetInTouch";

const Contact = () => {
  return (
    <div className="bg-black text-white">
      {/* Breadcrumb */}
      <section
        className="bg-cover bg-center py-28 relative"
        style={{ backgroundImage: `url(${mapImage})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative z-10 text-center">
          <h2 className="text-5xl font-bold text-orange-500">Contact Us</h2>

        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Info */}
          <div>
            <h2 className="text-4xl font-bold text-orange-500 mb-6">
              GET IN TOUCH
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <i className="fa fa-map-marker text-orange-500 text-2xl"></i>
                <p>333 Middle Winchendon Rd, Rindge, NH 03461</p>
              </div>
              <div className="flex items-start gap-4">
                <i className="fa fa-mobile text-orange-500 text-2xl"></i>
                <ul>
                  <li>125-711-811</li>
                  <li>125-668-886</li>
                </ul>
              </div>
              <div className="flex items-start gap-4">
                <i className="fa fa-envelope text-orange-500 text-2xl"></i>
                <p>Support.gymcenter@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-neutral-900 p-8 rounded-2xl shadow-lg">
            <form className="space-y-5">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                placeholder="Website"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <textarea
                placeholder="Comment"
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 transition-all w-full py-3 rounded-lg font-semibold text-white"
              >
                Submit
              </button>
            </form>
          </div>
        </div>

        {/* Google Map */}
        <div className="mt-16">
          <iframe
            title="gym-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12087.069761554938!2d-74.2175599360452!3d40.767139456514954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c254b5958982c3%3A0xb6ab3931055a2612!2sEast%20Orange%2C%20NJ%2C%20USA!5e0!3m2!1sen!2sbd!4v1581710470843!5m2!1sen!2sbd"
            height="450"
            style={{ border: 0, width: "100%" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      <GetInTouch/>
      <Footer/>
    </div>
  );
};

export default Contact;
