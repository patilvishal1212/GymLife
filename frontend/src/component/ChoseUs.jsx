import React from "react";

export default function ChoseUs(){
  const items = [
    { icon: "🚴‍♂️", title: "Modern equipment", desc: "Lorem ipsum dolor sit amet..." },
    { icon: "🥤", title: "Healthy nutrition plan", desc: "Quis ipsum suspendisse..." },
    { icon: "🏋️‍♂️", title: "Professional training plan", desc: "Lorem ipsum dolor..." },
    { icon: "💓", title: "Unique to your needs", desc: "Quis ipsum suspendisse..." },
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <span className="text-sm text-orange-500">Why chose us?</span>
          <h2 className="text-3xl font-bold text-white">PUSH YOUR LIMITS FORWARD</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 ">
          {items.map((it, idx) => (
            <div key={idx} className="text-center p-6 border rounded border-gray-400">
              <div className="text-4xl mb-4">{it.icon}</div>
              <h4 className="font-semibold mb-2 text-white">{it.title}</h4>
              <p className="text-sm text-gray-600">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
