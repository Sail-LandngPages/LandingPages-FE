import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const WhatIsBackend = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      className={`max-w-6xl mx-auto bg-[#f8f8f8] rounded-2xl px-6 md:px-12 py-16 transition-all duration-700 ease-in-out transform ${
        show ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
      } -mt-20 relative z-20 overflow-hidden`}
      style={{
        background:
          "linear-gradient(#f8f8f8, #f8f8f8) padding-box, linear-gradient(145deg, #e0e0e0, transparent, #e0e0e0) border-box",
        border: "1px solid transparent",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.05)",
      }}
    >
      {" "}
      {/* Floating Edge Image */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute -right-16 md:-right-24 lg:-right-32 -top-10 w-[200px] md:w-[280px] lg:w-[320px] pointer-events-none z-10"
      >
        {" "}
        <motion.img
          animate={{
            y: [0, -15, 0],
            x: [0, 8, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1750073434/Group_143725868_afbv0x.png"
          alt="Floating Backend Pattern"
          className="h-full w-full object-contain opacity-90"
        />
      </motion.div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        <motion.h2
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12 tracking-tight"
        >
          What's Backend Development?
        </motion.h2>

        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* 🔵 Blob Image */}
          <motion.div
            variants={itemVariants}
            className="w-full md:w-1/2 flex justify-center"
          >
            {" "}
            <div className="relative group w-[400px] h-[400px] md:w-[600px] md:h-[600px] xl:w-[700px] xl:h-[700px]">
              <img
                src="https://res.cloudinary.com/dgcjq4kbf/image/upload/v1750078164/Group_97_qfxvrt.png"
                alt="Backend Visual"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </motion.div>

          {/* 🟡 Text Content */}
          <motion.div
            variants={itemVariants}
            className="w-full md:w-1/2 space-y-6"
          >
            {[
              {
                text: (
                  <>
                    You know when you click{" "}
                    <span className="font-bold text-blue-600">"Buy Now"</span>{" "}
                    and your money disappears? <br /> Yeah. That's{" "}
                    <span className="font-bold text-blue-600">backend</span>{" "}
                    magic.
                  </>
                ),
              },
              {
                text: (
                  <>
                    Backend development is what makes websites work —{" "}
                    <span className="font-bold text-gray-900">
                      databases, servers, APIs, logic, logins, payments,
                      messages
                    </span>
                    , and all the stuff you never see (but would absolutely
                    panic if it broke).
                  </>
                ),
              },
              {
                text: (
                  <>
                    This is not just HTML and buttons. This is{" "}
                    <span className="font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                      Architecture. Automation. Engineering. Power.
                    </span>
                  </>
                ),
              },
            ].map(({ text }, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="p-6 bg-white rounded-xl transition-all duration-300 hover:translate-y-[-2px]"
                style={{
                  border: "1px solid #e5e5e5",
                  boxShadow: "0 2px 20px rgba(0, 0, 0, 0.02)",
                }}
              >
                <p className="text-xl text-gray-700 leading-relaxed">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default WhatIsBackend;
