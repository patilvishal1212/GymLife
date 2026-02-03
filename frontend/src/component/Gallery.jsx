import React from "react";
import g1 from "../assets/gallery/gallery-1.jpg";
import g2 from "../assets/gallery/gallery-2.jpg";
import g3 from "../assets/gallery/gallery-3.jpg";
import g4 from "../assets/gallery/gallery-4.jpg";
import g5 from "../assets/gallery/gallery-5.jpg";
import g6 from "../assets/gallery/gallery-6.jpg";
import g7 from "../assets/gallery/gallery-7.jpg";
import g8 from "../assets/gallery/gallery-8.jpg";
import g9 from "../assets/gallery/gallery-9.jpg";
// import g11 from "../assets/gallery/gallery-11.jpg";
// import g12 from "../assets/gallery/gallery-12.jpg";
import g13 from "../assets/gallery/gallery-13.jpg";
import g14 from "../assets/gallery/gallery-14.jpg";
import g15 from "../assets/gallery/gallery-15.jpg";

export default function Gallery() {
  const imgs = [g1, g2, g3, g4,  g5,  g7, g8, g9, g6, g13,g14, g15  ];

  return (
    <div className="py-14 bg-[#000000]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Masonry layout */}
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4">
          {imgs.map((im, idx) => (
            <div
              key={idx}
              className="mb-4 break-inside-avoid overflow-hidden rounded-xl bg-white shadow-sm"
            >
              <img
                src={im}
                alt=""
                className="w-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
