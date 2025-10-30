import React from "react";
import t1 from "../assets/team/team-1.jpg";
import t2 from "../assets/team/team-2.jpg";
import t3 from "../assets/team/team-3.jpg";

export default function Team(){
  const team = [
    {img:t1, name:"Athart Rachel", role:"Gym Trainer"},
    {img:t2, name:"John Doe", role:"Trainer"},
    {img:t3, name:"Jane Smith", role:"Coach"},
  ];
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <span className="text-sm text-orange-500">Our Team</span>
            <h2 className="text-2xl font-bold text-white">TRAIN WITH EXPERTS</h2>
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">appointment</button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {team.map((m,i)=>(
            <div key={i} className="text-center text-white">
              <img src={m.img} alt="" className="w-full h-64 object-cover rounded"/>
              <h4 className="mt-3 font-semibold">{m.name}</h4>
              <span className="text-sm text-gray-500">{m.role}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
