import React from "react";

export default function Pricing(){
  const plans = [
    { title: "Class drop-in", price: "$39.0", bullets: ["Free riding","Unlimited equipments","Personal trainer"] },
    { title: "12 Month unlimited", price: "$99.0", bullets: ["Free riding","Unlimited equipments","Personal trainer"] },
    { title: "6 Month unlimited", price: "$59.0", bullets: ["Free riding","Unlimited equipments","Personal trainer"] },
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8 text-white">Choose your pricing plan</h2>
        <div className="grid md:grid-cols-3 gap-6 text-white">
          {plans.map((p,i)=>(
            <div key={i} className="border rounded p-6">
              <h3 className="font-semibold text-white">{p.title}</h3>
              <div className="my-4">
                <h2 className="text-2xl font-bold text-white">{p.price}</h2>
                <span className="text-sm text-gray-500">SINGLE CLASS</span>
              </div>
              <ul className="text-sm mb-4">
                {p.bullets.map((b,idx)=>(<li key={idx}>• {b}</li>))}
              </ul>
              <button className="bg-orange-500 text-white px-4 py-2 rounded">Enroll now</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
