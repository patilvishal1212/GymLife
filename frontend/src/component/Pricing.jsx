import React from "react";

export default function Pricing(){
  const plans = [
    { title: "Class drop-in", price: "$39.0", bullets: ["Free riding","Unlimited equipments","Personal trainer","Weight losing classes","Month to mouth","No time restriction"] },
    { title: "12 Month unlimited", price: "$99.0", bullets: ["Free riding","Unlimited equipments","Personal trainer","Weight losing classes","Month to mouth","No time restriction"] },
    { title: "6 Month unlimited", price: "$59.0", bullets: ["Free riding","Unlimited equipments","Personal trainer","Weight losing classes","Month to mouth","No time restriction"] },
  ];

  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-6 text-center ">
        <h2 className="text-3xl font-bold mb-8 text-white">Choose your pricing plan</h2>
        <div className="grid md:grid-cols-3 gap-6 text-white ">
          {plans.map((p,i)=>(
            <div key={i} className="border rounded p-6 hover:bg-white transition duration-300 group">
              <h3 className="font-semibold text-2xl text-white group-hover:text-black transition">{p.title}</h3>
              <div className="my-4">
                <h2 className="text-2xl font-bold text-gray-500">{p.price}</h2>
                <span className="text-sm text-gray-500">SINGLE CLASS</span>
              </div>
              <ul className="text-sm mb-4 text-gray-500">
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
