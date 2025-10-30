import React from "react";
import c1 from "../assets/classes/class-1.jpg";
import c2 from "../assets/classes/class-2.jpg";
import c3 from "../assets/classes/class-3.jpg";
import c4 from "../assets/classes/class-4.jpg";
import c5 from "../assets/classes/class-5.jpg";

export default function Classes(){
  const cls = [
    { img: c1, tag: "STRENGTH", title: "Weightlifting" },
    { img: c2, tag: "CARDIO", title: "Indoor cycling" },
    { img: c3, tag: "STRENGTH", title: "Kettlebell power" },
    { img: c4, tag: "CARDIO", title: "Indoor cycling" },
    { img: c5, tag: "TRAINING", title: "Boxing" },
  ];

  return (
    <section className="py-16 bg-black ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-sm text-orange-500">Our Classes</span>
          <h2 className="text-3xl font-bold text-white">WHAT WE CAN OFFER</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {cls.map((c,i)=>(
            <div key={i} className="relative group overflow-hidden rounded-2xl">
              <img src={c.img} alt="" className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"/>
              <div className="absolute bottom-0 w-full bg-black/70 py-3">
                <span className="text-xs text-orange-500">{c.tag}</span>
                <h5 className="mt-2 font-semibold text-white">{c.title}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
