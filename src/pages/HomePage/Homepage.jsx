import React from "react";
import Header from "../../static/Header";
import Hero from "../../components/Hero/Hero";
import Footer from "../../static/Footer";

const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="fixed top-0 left-0 right-0 z-50 bg-white">
        <Header />
      </div>
      <main className="flex-1 mt-[56px]">
        <Hero />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
