import React from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  return (
    <section className="w-full min-h-[calc(100vh-56px)] pb-32 bg-white flex items-end justify-center relative">
      <div
        className="w-full h-[98%] absolute inset-0"
        style={{ filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.25))" }}
      >
        <div
          className="w-full h-full bg-[#F8F7F5]/90"
          style={{
            clipPath: "ellipse(100% 100% at 50% 0%)",
          }}
        >
          <div className="container mx-auto h-full flex flex-col lg:flex-row items-center justify-center gap-8 px-4 lg:px-8">
            {/* Left Card Box */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-6 px-4"
            >
              <h1 className="font-['Raleway'] font-bold text-3xl md:text-4xl lg:text-[56px] leading-tight text-[#133C8A] text-center lg:text-left max-w-[700px] flex flex-col gap-1">
                <motion.span
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="block"
                >
                  Fuel your Future
                </motion.span>
                <motion.span className="block">
                  <motion.span
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    with{" "}
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="inline-block"
                  >
                    Code
                  </motion.span>
                  ,{" "}
                  <motion.span
                    initial={{ opacity: 0, x: 100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="inline-block"
                  >
                    Creativity
                  </motion.span>
                </motion.span>
                <motion.span className="block">
                  <motion.span
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.9 }}
                  >
                    and Innovation
                  </motion.span>
                  <motion.span
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: 1.2,
                      type: "spring",
                      stiffness: 300,
                      damping: 10,
                    }}
                    className="inline-block"
                  >
                    !
                  </motion.span>
                </motion.span>
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="font-['Sora'] font-normal text-lg md:text-xl lg:text-[20px] text-[#050505] max-w-xl text-center lg:text-left"
              >
                Master high-demand tech skills and create solutions that matter.
              </motion.p>

              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                className="bg-[#133C8A] text-white px-8 py-4 rounded-[40px] text-lg font-['Sora'] flex items-center gap-2 backdrop-blur-sm hover:bg-[#133C8A]/90 transition-all duration-300 mx-auto lg:mx-0 cursor-pointer"
              >
                Join Now
              </motion.button>
            </motion.div>
            {/* Right Card Box with Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="w-full lg:w-1/2 flex justify-center items-center px-4 mt-8 lg:mt-0"
            >
              <img
                src="/src/assets/images/svg/heroImg.svg"
                alt="Hero Illustration"
                className="w-full max-w-[900px] h-auto object-contain"
              />
            </motion.div>{" "}
          </div>

          <motion.div
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center md:hidden lg:flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            <div className="flex flex-col items-center font-['Raleway'] font-bold text-base text-[#133C8A]">
              <span>Start</span>
              <span>Learning</span>
            </div>
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ChevronDownIcon className="h-6 w-6 text-[#133C8A] stroke-2" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
