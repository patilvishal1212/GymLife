import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import hero1 from "../assets/hero-bg.jpg";
import hero2 from "../assets/hero-bgs.jpg";
// import hero3 from "../assets/hero3.jpg";

const Hero = () => {
  return (
    <section className="h-screen">
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        className="h-full"
      >
        {[hero1, hero2].map((img, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-screen bg-cover bg-center flex items-center justify-end pr-16"
              style={{ backgroundImage: `url(${img})` }}
            >
              <div className="absolute inset-0 bg-opacity-70"></div>
              <div className="relative z-10 text-right text-white">
                <h1 className="text-5xl font-bold mb-4">
                  SHAPE YOUR BODY <br />
                  BE <span className="text-orange-500">STRONG</span> <br />
                  TRAINING HARD
                </h1>
                <button className="bg-orange-500 px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition">
                  JOIN NOW
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;