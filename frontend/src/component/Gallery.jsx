import React from "react";
import g1 from "../assets/gallery/gallery-1.jpg";
import g2 from "../assets/gallery/gallery-2.jpg";
import g3 from "../assets/gallery/gallery-3.jpg";
import g4 from "../assets/gallery/gallery-4.jpg";
import g5 from "../assets/gallery/gallery-5.jpg";
import g6 from "../assets/gallery/gallery-6.jpg";

export default function Gallery(){
  const imgs = [g1,g2,g3,g4,g5,g6];
  return (
    <div className="py-12 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-3">
          {imgs.map((im,idx)=>(
            <div key={idx} className="h-40 overflow-hidden">
              <img src={im} alt="" className="w-full h-full object-cover"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
