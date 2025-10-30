import React from "react";
import Hero from "../component/Hero";
import ChoseUs from "../component/ChoseUs";
import Classes from "../component/Classes";
import Banner from "../component/Banner";
import Pricing from "../component/Pricing";
import Gallery from "../component/Gallery";
import Team from "../component/Team";
import GetInTouch from "../component/GetInTouch";
import Footer from "../component/Footer";

export default function Home(){
  return (
    <div > {/* space for fixed navbar */}
      <Hero />
      <ChoseUs />
      <Classes />
      <Banner />
      <Pricing />
      <Gallery />
      <Team />
      <GetInTouch />
      <Footer/>
    </div>
  );
}
