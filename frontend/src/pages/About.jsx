import React from "react";
import breadcrumbBg from "../assets/breadcrumb-bg.jpg";
import aboutImg from "../assets/about-us.jpg";
import team1 from "../assets/team/team-1.jpg";
import team2 from "../assets/team/team-2.jpg";
import team3 from "../assets/team/team-3.jpg";
import testimonial1 from "../assets/testimonial/testimonial-1.jpg";
import testimonial2 from "../assets/testimonial/testimonial-2.jpg";
import Footer from "../component/Footer";
import GetInTouch from "../component/GetInTouch";
import Banner from "../component/Banner";

const About = () => {
  return (
    <div className="text-gray-100 bg-black">
      {/* Breadcrumb Section */}
      <section
        className="relative bg-cover bg-center py-24 text-center h-[90vh]"
        style={{ backgroundImage: `url(${breadcrumbBg})` }}
      >
        {/* <div className="bg-black/60 absolute inset-0" /> */}
        <div className="relative z-10 mt-25">
          <h2 className="text-5xl font-bold uppercase mb-2">About Us</h2>
          <p className="text-white mt-5">
            <a href="/" className="text-2xl">
              Home
            </a>{" "}
            /<samp className="text-orange-500 text-2xl"> About</samp>
          </p>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-black text-center">
        <div className="container mx-auto">
          <h3 className="text-red-500 uppercase tracking-widest text-2xl">
            Why Choose Us?
          </h3>
          <h2 className="text-4xl font-bold mt-2 mb-10">
            PUSH YOUR LIMITS FORWARD
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6">
            {[
              {
                title: "Modern equipment",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
              {
                title: "Healthy nutrition plan",
                text: "Quis ipsum suspendisse ultrices gravida commodo viverra.",
              },
              {
                title: "Professional training plan",
                text: "Sed do eiusmod tempor incididunt ut dolore facilisis.",
              },
              {
                title: "Unique to your needs",
                text: "Risus commodo viverra maecenas accumsan lacus vel facilisis.",
              },
              
            ].map((item, idx) => (
              <div key={idx} className="bg-neutral-900 p-6 rounded-xl shadow-lg">
                <h4 className="text-xl font-semibold mb-2 text-red-500">
                  {item.title}
                </h4>
                <p className="text-gray-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="grid grid-cols-1 lg:grid-cols-2">
        <div
          className="relative h-[400px] lg:h-auto bg-cover bg-center flex items-center justify-center"
          style={{ backgroundImage: `url(${aboutImg})` }}
        >
          <a
            href="https://www.youtube.com/watch?v=EzKkl64rRbM"
            className="absolute z-10 text-6xl text-red-500 hover:text-white"
          >
            <i className="fa fa-caret-right"></i>
          </a>
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="bg-neutral-950 p-10 flex flex-col justify-center">
          <h3 className="text-red-500 uppercase mb-2 tracking-widest">
            About Us
          </h3>
          <h2 className="text-3xl font-bold mb-6">What we have done</h2>
          <p className="text-gray-400 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </p>

          <div>
            {[
              { label: "Body building", value: "80%" },
              { label: "Training", value: "85%" },
              { label: "Fitness", value: "75%" },
            ].map((bar, i) => (
              <div key={i} className="mb-4">
                <p className="text-gray-300 mb-1">{bar.label}</p>
                <div className="w-full bg-gray-700 h-2 rounded-full">
                  <div
                    className="bg-red-500 h-2 rounded-full"
                    style={{ width: bar.value }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-black text-center">
        <div className="container mx-auto px-6">
          <h3 className="text-red-500 uppercase tracking-widest text-md text-left mb-2">
            Our Team
          </h3>
          <h2 className="text-4xl font-bold mb-10 text-left">TRAIN WITH EXPERTS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[team1, team2, team3, team1, team2, team3].map((member, idx) => (
              <div
                key={idx}
                className="relative group overflow-hidden rounded-2xl"
              >
                <img
                  src={member}
                  alt={`team-${idx}`}
                  className="w-full h-80 object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute bottom-0 w-full bg-black/70 py-3">
                  <h4 className="text-lg font-semibold">Athart Rachel</h4>
                  <span className="text-gray-400 text-sm">Gym Trainer</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Section */}
      <Banner/>

      {/* Testimonials */}
      <section className="py-20 bg-neutral-950 text-center">
        <h3 className="text-red-500 uppercase tracking-widest font-semibold text-2xl mb-2">
          Testimonial
        </h3>
        <h2 className="text-4xl font-bold mb-10">Our Clients Say</h2>
        <div className="flex flex-col lg:flex-row gap-10 justify-center items-center px-6">
          {[testimonial1, testimonial2].map((img, i) => (
            <div
              key={i}
              className="bg-neutral-900 p-8 rounded-2xl max-w-md text-center"
            >
              <img
                src={img}
                alt="testimonial"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <p className="text-gray-400 italic mb-4">
                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.”
              </p>
              <h5 className="font-semibold text-white">Marshmello Gomez</h5>
              <div className="flex justify-center text-yellow-400 mt-2">
                {[1, 2, 3, 4, 5].map((s) => (
                  <i key={s} className="fa fa-star mx-1"></i>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <GetInTouch/>
      <Footer/>
    </div>
  );
};

export default About;
