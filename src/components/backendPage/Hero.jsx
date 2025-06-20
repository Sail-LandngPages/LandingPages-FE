import React from "react";

const HeroSection = () => {
  return (
    <div className="relative h-screen bg-black text-white">
      {/* Background Overlay */}
      <div className="absolute inset-0">
        <img
          src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1750070473/Rectangle_21829_jzeh7s.png"
          alt="Backend Developer"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center h-full px-6 md:px-20 max-w-4xl">
        {" "}
        <h1 className="text-4xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          Architect the Digital Future <br />
          Master the <span className="text-yellow-400">Backend Universe</span>
        </h1>
        <p className="mt-6 text-xl text-gray-200 max-w-2xl leading-relaxed">
          Transform ideas into scalable systems. From APIs to databases, learn
          to craft the powerful infrastructure that drives modern technology.
          Your journey to becoming a backend virtuoso starts here.
        </p>{" "}
        <button className="mt-8 bg-gradient-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2">
          Start Your Journey <span className="ml-2">→</span>
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
