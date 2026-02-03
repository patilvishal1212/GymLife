import React from "react";

export default function ChoseUs() {
  const items = [
    {
      icon: "🚴‍♂️",
      title: "Modern equipment",
      desc:(
        <>
        Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.
        </>
      )
        
    },
    {
      icon: "🥤",
      title: "Healthy nutrition plan",
      desc:
        "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
    {
      icon: "🏋️‍♂️",
      title: "Proffesponal training plan",
      desc:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore facilisis.",
    },
    {
      icon: "🤍",
      title: "Unique to your needs",
      desc:
        "Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.",
    },
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto ">
        
        {/* Section title */}
        <div className="text-center mb-14">
          <span className="block  uppercase tracking-widest text-orange-500 mb-2 text-2xl font-bold">
            Why chose us?
          </span>
          <h2 className="text-4xl font-extrabold text-white">
            PUSH YOUR LIMITS FORWARD
          </h2>
        </div>

        {/* Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((it, idx) => (
            <div
              key={idx}
              className="text-center px-4"
            >
              <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-orange-500 text-black text-4xl hover:scale-170 transition duration-200">
                {it.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3">
                {it.title}
              </h4>
              <p className="text-gray-400 text-sm leading-relaxed">
                {it.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
