import React from "react";
import banner from "../assets/banner-bg.jpg";

export default function Banner() {
  return (
    <section
      className="relative h-[100vh] bg-center bg-cover"
      style={{ backgroundImage: `url(${banner})` }}
    >
      {/* overlay */}
      {/* <div className="absolute inset-0 bg-black/60"></div> */}

      {/* content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">
        <h2 className="text-4xl md:text-5xl font-bold">
          Register now to get more deals
        </h2>
        <p className="mt-3 text-lg">
          Where health, beauty and fitness meet.
        </p>
        <button className="mt-6 bg-orange-500 px-6 py-3 rounded hover:bg-orange-600 transition">
          Appointment
        </button>
      </div>
    </section>
  );
}
