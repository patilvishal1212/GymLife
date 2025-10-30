import React from "react";
import Logo from "../assets/logo.png";
import BreadcrumbBg from "../assets/breadcrumb-bg.jpg";
import ClassDetailImg from "../assets/classes/class-details/class-detailsl.jpg";
import TrainerImg from "../assets/classes/class-details/trainer-profile.jpg";
import Footer from "../component/Footer";
import GetInTouch from "../component/GetInTouch";

const ClassDetails = () => {
  return (
    <div className="font-muli text-gray-800 bg-black">
      {/* Header */}
      <header className="bg-black text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div className="flex items-center space-x-3">
            <img src={Logo} alt="Gym Logo" className="h-10 w-auto" />
            <h1 className="text-2xl font-oswald font-bold uppercase">
              Gym Center
            </h1>
          </div>
          <nav>
            <ul className="hidden md:flex space-x-8 text-sm font-semibold uppercase">
              <li><a href="/" className="hover:text-red-500">Home</a></li>
              <li><a href="/about" className="hover:text-red-500">About</a></li>
              <li><a href="/classes" className="text-red-500">Classes</a></li>
              <li><a href="/services" className="hover:text-red-500">Services</a></li>
              <li><a href="/team" className="hover:text-red-500">Team</a></li>
              <li><a href="/contact" className="hover:text-red-500">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Breadcrumb */}
      <section
        className="bg-cover bg-center py-20 text-center text-white" 
        style={{ backgroundImage: `url(${BreadcrumbBg})` }}
      >
        <h2 className="text-4xl font-oswald uppercase font-bold">
          Classes Detail
        </h2>
        <div className="text-sm mt-2">
          <a href="/" className="text-red-400 hover:text-white">Home</a> /{" "}
          <span className="text-gray-300">Body Building</span>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-16 container mx-auto px-4 grid lg:grid-cols-3 gap-10 bg-black">
        {/* Left Side */}
        <div className="lg:col-span-2">
          <img
            src={ClassDetailImg}
            alt="Class Details"
            className="rounded-lg shadow-lg mb-6 w-full object-cover"
          />
          <div>
            <h3 className="text-2xl font-bold mb-3 text-white">Body Building</h3>
            <p className="text-gray-500 mb-6 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>

            <h3 className="text-2xl font-bold mb-3 text-white">Trainer</h3>
            <p className="text-gray-500 mb-8">
              Dolor sit amet, consectetur adipisicing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </p>

            {/* Trainer Profile */}
            <div className="bg-gray-50 p-6 rounded-lg shadow-md grid md:grid-cols-2 gap-6 items-center">
              <img
                src={TrainerImg}
                alt="Trainer"
                className="rounded-lg shadow-lg w-full object-cover"
              />
              <div>
                <h4 className="text-xl font-bold">Athart Rachel</h4>
                <span className="text-red-500 font-semibold">Gym Trainer</span>
                <div className="flex space-x-3 my-3 text-gray-600">
                  <i className="fa fa-facebook hover:text-red-500"></i>
                  <i className="fa fa-twitter hover:text-red-500"></i>
                  <i className="fa fa-youtube-play hover:text-red-500"></i>
                  <i className="fa fa-instagram hover:text-red-500"></i>
                </div>
                <p className="text-sm text-gray-700 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="grid grid-cols-2 text-sm gap-y-2">
                  <li><span className="font-semibold">Age:</span> 35</li>
                  <li><span className="font-semibold">Weight:</span> 148 lbs</li>
                  <li><span className="font-semibold">Height:</span> 6' 2"</li>
                  <li><span className="font-semibold">Occupation:</span> Co-founder</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <div className="bg-gray-100 p-6 rounded-lg shadow">
            <h5 className="font-bold text-xl border-b pb-2 mb-4">Categories</h5>
            <ul className="space-y-2 text-gray-700">
              {["Yoga", "Running", "Weightloss", "Cardio", "Body Building", "Nutrition"].map((cat, i) => (
                <li key={i} className="flex justify-between hover:text-red-500">
                  <span>{cat}</span>{" "}
                  <span className="text-gray-500">
                    {Math.floor(Math.random() * 80)}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-100 p-6 mt-8 rounded-lg shadow">
            <h5 className="font-bold text-xl border-b pb-2 mb-4">Latest Posts</h5>
            {[
              "This Japanese Way of Making Iced Coffee Is a Game...",
              "Grilled Potato and Green Bean Salad",
              "The $8 French Rosé I Buy in Bulk Every Summer",
              "Ina Garten's Skillet-Roasted Lemon Chicken",
            ].map((title, i) => (
              <div key={i} className="mb-4">
                <h6 className="font-semibold text-sm hover:text-red-500 cursor-pointer">
                  {title}
                </h6>
                <span className="text-xs text-gray-500">
                  Aug {15 + i}, 2019
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timetable */}
      <section className="bg-black   py-12 ">
        <div className="container mx-auto px-4">
          <h5 className="text-2xl font-bold text-center mb-6 text-white">
            Classes Timetable
          </h5>
          <div className="overflow-x-auto">
            <table className="min-w-full border text-sm text-center">
              <thead className="bg-red-600 text-white">
                <tr>
                  <th className="p-2">Time</th>
                  <th className="p-2">Monday</th>
                  <th className="p-2">Tuesday</th>
                  <th className="p-2">Wednesday</th>
                  <th className="p-2">Thursday</th>
                  <th className="p-2">Friday</th>
                  <th className="p-2">Saturday</th>
                  <th className="p-2">Sunday</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border">
                  <td className="p-2 font-semibold">6.00am - 8.00am</td>
                  <td className="bg-gray-100 p-2">Weight Loose</td>
                  <td className="p-2">Cardio</td>
                  <td className="bg-gray-100 p-2">Yoga</td>
                  <td className="p-2">Fitness</td>
                  <td className="bg-gray-100 p-2"></td>
                  <td className="p-2">Boxing</td>
                  <td className="bg-gray-100 p-2">Body Building</td>
                </tr>
                <tr className="border">
                  <td className="p-2 font-semibold">10.00am - 12.00am</td>
                  <td className="p-2"></td>
                  <td className="bg-gray-100 p-2">Fitness</td>
                  <td className="p-2">Weight Loose</td>
                  <td className="bg-gray-100 p-2">Cardio</td>
                  <td className="p-2">Body Building</td>
                  <td className="bg-gray-100 p-2">Karate</td>
                  <td className="p-2"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <GetInTouch/>
      <Footer/>
    </div>
  );
};

export default ClassDetails;
