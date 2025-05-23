import React from "react";
import { motion } from "framer-motion";

const CourseCard = ({ course }) => {
  const studentCounts = {
    "Product Design": 40,
    "Data Science": 60,
    "Game Development": 234,
    "Software Development": 342,
    "Blockchain Development": 40,
    "Generative AI": 11,
    Backend: 342,
    Frontend: 234,
  };

  const studentImages = [
    "/src/assets/images/svg/Blink.svg",
    "/src/assets/images/svg/Ander.svg",
    "/src/assets/images/svg/Big Bird.svg",
    "/src/assets/images/svg/Bartender.svg",
    "/src/assets/images/svg/Bill.svg",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.03,
        boxShadow: "0px 25px 70px rgba(38, 45, 118, 0.15)",
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="w-[268px] bg-white rounded-[14px] overflow-hidden will-change-transform"
      style={{
        boxShadow: "0px 10px 60px rgba(38, 45, 118, 0.08)",
        transform: "translateZ(0)",
      }}
    >
      {/* Course Image */}
      <div className="relative w-full h-[176px] overflow-hidden">
        <img
          src={course.image}
          alt={course.name}
          className="w-[334px] h-[176px] object-cover"
        />
      </div>
      {/* Student Info Capsule */}
      <div className="px-4 -mt-5 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="h-[40.98px] px-[10px] py-[5px] bg-[#FAFAFA] rounded-full flex items-center justify-between"
        >
          {/* Student Images Stack */}
          <motion.div className="flex items-center">
            {studentImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ x: 0 }}
                whileInView={{
                  x: 0,
                  transition: {
                    delay: index * 0.1,
                  },
                }}
                className="w-8 h-8 rounded-full border-2 border-white overflow-hidden"
                style={{
                  marginLeft: index === 0 ? 0 : "-11px",
                  zIndex: 5 - index,
                }}
              >
                <img
                  src={img}
                  alt={`Student ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </motion.div>
          <div className="flex items-center gap-1">
            <span className="font-['Raleway'] text-base font-medium text-[#263238]">
              +
            </span>
            <span className="font-['Raleway'] text-base font-medium text-[#263238]">
              {studentCounts[course.name]} students
            </span>
          </div>
        </motion.div>
      </div>
      {/* Course Info */}{" "}
      <div className="p-4 flex flex-col gap-2.5">
        <h3 className="font-['Raleway'] font-extrabold text-lg text-[#133C8A]">
          {course.name}
        </h3>
        <p className="font-['Raleway'] text-sm text-[#4D4D4D]">
          {course.description}
        </p>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-[16px] px-5 py-2.5 bg-[#133C8A] text-white rounded-full font-['Raleway'] text-sm cursor-pointer w-fit"
        >
          Enroll Now
        </motion.button>
      </div>
    </motion.div>
  );
};

export default CourseCard;
