



import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; 
import left from '/Left.png'
import right from '/Right.png'
import quoteIcon from "/testimonialImg.png"; 
import "./Testimony.css"; 

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
  <div className="testimonial-card-container">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="testimonial-card"
      style={{
        boxShadow: "2px 0 20px rgba(0, 0, 0, 0.03)",
        // backgroundColor:'pink'
      }}
      
                  
    >
      {/* Quote Icon Box */}
      <div className="quote-icon-box-wrapper" >
        <div className="relative" style={{width:'100px',height:'100px',backgroundColor:'transparent'}}> 
              <img
                src={quoteIcon}
                alt="quote"
                className="quote-icon" 
              /> 
        </div>
      </div>

      {/* Testimonial Content */}
      <p className="testimonial-quote">
        {testimonial.quote}
      </p>
      <div>
        <h4 className="testimonial-name">
          {testimonial.name}
        </h4>
        <p className="testimonial-role">
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
    <section className="testimonial-section">
      <div className="testimonial-container">
        {/* Header */}
        <div className="testimonial-header">
          {" "}
          <div className="testimonial-header-line-wrapper">
             
            <motion.h2
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="testimonial-header-title"
            >
              TESTIMONIAL
            </motion.h2>
          </div>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="testimonial-subheader"
          >
            Don't hesitate to join SAIL and experience a different kind of tech journey!
          </motion.h3>
        </div>
        {/* Testimonials Carousel */}
        <div className="testimonial-carousel-wrapper">
          {/* Navigation Buttons */}
          <motion.div
            className="nav-button-left"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              onClick={handlePrev}
              className="nav-button"
              whileHover={{ scale: 1.1, backgroundColor: "white" }}
              whileTap={{ scale: 0.95 }}
            > 
                <img src={left} alt=''/> 
            </motion.button>
          </motion.div>
          <div className="testimonial-cards-overflow">
            
            <motion.div
              className="testimonial-cards-inner" 
              // style={{backgroundColor:'red'}}
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
            className="nav-button-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.button
              onClick={handleNext}
              className="nav-button"
              whileHover={{ scale: 1.1, backgroundColor: "#f8f8f8" }}
              whileTap={{ scale: 0.95 }}
            >
                <img src={right} alt/>  
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;