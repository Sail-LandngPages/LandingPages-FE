import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import quoteIcon from "../../../assets/images/svg/quote.svg";

const testimonials = [
  {
    id: 1,
    quote:
      "I never thought I'd understand data science, but SAIL made it fun and easy. Now, I'm freelancing as a data analyst! The journey has been incredible.",
    name: "Oluwaseun Adebayo",
    role: "Data Analyst & Freelancer",
  },
  {
    id: 2,
    quote:
      "From writing my first line of code to building full-stack applications, SAIL's hands-on approach made learning technology straightforward and exciting.",
    name: "Chidinma Okonkwo",
    role: "Full-Stack Developer",
  },
  {
    id: 3,
    quote:
      "The AI and Machine Learning track at SAIL opened doors I never knew existed. Their project-based learning approach made complex concepts click for me.",
    name: "Babajide Oyewole",
    role: "AI Engineer at TechCorp",
  },
  {
    id: 4,
    quote:
      "Transitioning from finance to tech seemed impossible, but SAIL's structured curriculum and supportive community made it achievable. Now I'm living my dream!",
    name: "Aisha Ibrahim",
    role: "Product Manager at GlobalTech",
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div className="pt-8 relative">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="w-[309px] md:w-[309px] lg:w-[489px] h-[196px] md:h-[196px] lg:h-[210px] p-8 bg-white border border-[#5BBCB4] rounded-[20px] md:rounded-[40px] relative shrink-0"
      style={{
        boxShadow: "2px 0 20px rgba(0, 0, 0, 0.03)",
      }}
    >
      {/* Quote Icon Box */}
      <div className="absolute -top-6 left-8">
        <div className="relative">
          <motion.div
            className="w-12 h-12 bg-[#5BBCB4] rounded-[13px] flex items-center justify-center overflow-hidden"
            style={{
              transform: "rotate(45deg)",
              boxShadow: "2px 0 20px rgba(0, 0, 0, 0.03)",
            }}
            whileInView={{
              rotate: [45, 55, 45],
              transition: {
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <img
                src={quoteIcon}
                alt="quote"
                className="w-6 h-6"
                style={{ transform: "rotate(-45deg)" }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Testimonial Content */}
      <p className="font-['Raleway'] text-[#263238] text-base md:text-lg leading-7 mb-6 line-clamp-3">
        {testimonial.quote}
      </p>
      <div>
        <h4 className="font-['Raleway'] font-bold text-[#263238] text-sm md:text-base">
          {testimonial.name}
        </h4>
        <p className="font-['Raleway'] text-[#696984] text-xs md:text-sm">
          {testimonial.role}
        </p>
      </div>
    </motion.div>
  </div>
);

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = width < 768;
  const isTablet = width >= 768 && width < 1024;
  const cardWidth = isMobile || isTablet ? 309 : 489;
  const cardGap = isMobile ? 16 : isTablet ? 11 : 32;
  const cardsPerView = isMobile ? 1 : 2;
  const maxIndex = testimonials.length - cardsPerView;

  useEffect(() => {
    let timer;
    if (isAutoPlay) {
      timer = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex >= maxIndex ? 0 : prevIndex + 1
        );
      }, 5000);
    }
    return () => clearInterval(timer);
  }, [maxIndex, isAutoPlay]);

  const handlePrev = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prevIndex) => {
      setTimeout(() => setIsAutoPlay(true), 10000);
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
  };

  const handleNext = () => {
    setIsAutoPlay(false);
    setCurrentIndex((prevIndex) => {
      setTimeout(() => setIsAutoPlay(true), 10000);
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  return (
    <section className="w-full bg-[#EEF1F2] py-12 md:py-20 overflow-x-hidden">
      <div className="container mx-auto px-0 md:px-4">
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-6 md:mb-12">
          {" "}
          <div className="flex items-center justify-center mb-4">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 80 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="h-[1px] bg-[#263238]"
            />
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="font-['Raleway'] text-[#263238] text-2xl mx-4"
            >
              TESTIMONIAL
            </motion.h2>
          </div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="font-['Sora'] text-[#696984] text-center md:text-[20px] font-semibold leading-6 mb-6 max-w-2xl mx-auto"
          >
            What do people say about SAIL Innovation Lab?
          </motion.h3>
        </div>
        {/* Testimonials Carousel */}
        <div className="relative w-screen md:max-w-[629px] lg:max-w-[1010px] mx-auto">
          {/* Navigation Buttons */}
          <motion.div
            className="absolute top-1/2 -translate-y-1/2 left-3 md:-left-12 lg:-left-16 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              onClick={handlePrev}
              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center shadow-[0_2px_29px_rgba(0,0,0,0.13)] cursor-pointer hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.1, backgroundColor: "#f8f8f8" }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ x: [-3, 0, -3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronLeftIcon className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-[rgba(0,0,0,0.87)]" />
              </motion.div>
            </motion.button>
          </motion.div>

          <div className="overflow-hidden w-[309px] md:w-auto mx-auto">
            <motion.div
              className="flex gap-4 md:gap-[11px] lg:gap-8 justify-start"
              animate={{
                x: -currentIndex * (cardWidth + cardGap),
              }}
              transition={{
                duration: 0.7,
                ease: "easeInOut",
              }}
            >
              {testimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                />
              ))}
            </motion.div>
          </div>

          <motion.div
            className="absolute top-1/2 -translate-y-1/2 right-3 md:-right-12 lg:-right-16 z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              onClick={handleNext}
              className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white rounded-full flex items-center justify-center shadow-[0_2px_29px_rgba(0,0,0,0.13)] cursor-pointer hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.1, backgroundColor: "#f8f8f8" }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ x: [3, 0, 3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ChevronRightIcon className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-[rgba(0,0,0,0.87)]" />
              </motion.div>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
