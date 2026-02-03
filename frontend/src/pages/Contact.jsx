import React, { useState } from "react";
import mapImage from "../assets/breadcrumb-bg.jpg";
import Footer from "../component/Footer";
import GetInTouch from "../component/GetInTouch";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
  });

  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div className="bg-black text-white">
      {/* Breadcrumb */}
      <section
        className="relative bg-cover bg-center py-24 text-center h-[90vh]"
        style={{ backgroundImage: `url(${mapImage})` }}
      >
        <div className="relative z-10 mt-25">
          <h2 className="text-5xl font-bold uppercase mb-2">Contact Us</h2>
          <p className="text-white mt-5">
            <a href="/" className="text-2xl">Home</a> /
            <samp className="text-orange-500 text-2xl"> Contact-Us</samp>
          </p>
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
            <form className="space-y-5" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <input
                type="text"
                name="website"
                placeholder="Website"
                value={formData.website}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              <textarea
                name="comment"
                placeholder="Comment"
                rows="4"
                value={formData.comment}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
              ></textarea>
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 transition-all w-[15rem] py-3 rounded-lg font-semibold text-white ml-24"
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

      <GetInTouch />
      <Footer />
    </div>
  );
};

export default Contact;
