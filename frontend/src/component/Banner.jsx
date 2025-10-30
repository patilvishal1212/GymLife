import React from "react";
import banner from "../assets/banner-bg.jpg";

export default function Banner(){
  return (
    <section className="py-20 bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
      <div className="hero-overlay absolute inset-0"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center text-white">
        <h2 className="text-3xl font-bold">registration now to get more deals</h2>
        <p className="mt-2">Where health, beauty and fitness meet.</p>
        <button className="mt-6 bg-orange-500 px-6 py-3 rounded">Appointment</button>
      </div>
    </section>
  );
}
