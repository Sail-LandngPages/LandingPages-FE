import React, { useState } from "react";
import { motion } from "framer-motion";
import CourseCard from "./CourseCard/CourseCard";

const PopularCourses = () => {
  const [selectedFilter, setSelectedFilter] = useState("All Programs");

  const courses = [
    {
      id: 1,
      name: "Product Design",
      description:
        "Learn to design stunning, user-friendly products from concept to prototype — using the tools top designers swear by.",
      image: "/src/assets/images/svg/productCourse.svg",
      category: "Product Design",
    },
    {
      id: 2,
      name: "Data Science",
      description:
        "Discover how to turn data into insights — master analysis, visualization, and machine learning with hands-on tools.",
      image: "/src/assets/images/svg/Data.svg",
      category: "Data Science",
    },
    {
      id: 3,
      name: "Game Development",
      description:
        "Learn to build immersive games from scratch — design, code, and bring your ideas to life with real-time engines.",
      image: "/src/assets/images/svg/Game.svg",
      category: "Game Development",
    },
    {
      id: 4,
      name: "Software Development",
      description:
        "Build the future of tech — develop robust, real-world applications from the ground up using industry-proven tools and practices.",
      image: "/src/assets/images/svg/Software.svg",
      category: "Software Development",
    },
    {
      id: 5,
      name: "Blockchain Development",
      description:
        "Dive into decentralized technology and engineer the future with smart contracts and secure digital systems.",
      image: "/src/assets/images/svg/Blockchain.svg",
      category: "Blockchain Development",
    },
    {
      id: 6,
      name: "Generative AI",
      description:
        "Explore the power of AI to generate text, images, and ideas — and build tools that think creatively.",
      image: "/src/assets/images/svg/GenAI.svg",
      category: "Generative AI",
    },
    {
      id: 7,
      name: "Backend",
      description:
        "Master the backbone of the web — build powerful, scalable systems and APIs that keep modern apps running.",
      image: "/src/assets/images/svg/Backend.svg",
      category: "Backend",
    },
    {
      id: 8,
      name: "Frontend",
      description:
        "Craft stunning, interactive web experiences using the latest frontend frameworks and design systems.",
      image: "/src/assets/images/svg/Frontend.svg",
      category: "Frontend",
    },
  ];

  const filters = [
    "All Programs",
    "Software Development",
    "Data Science",
    "Product Design",
    "Game Development",
    "Generative AI",
  ];

  const pathVariants = {
    hidden: {
      pathLength: 0,
      opacity: 0,
    },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section className="w-full py-20 pb-[103px] bg-white">
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col items-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative"
          >
            {" "}
            <h2 className="font-['Inter'] font-bold text-[#FD661F] text-4xl md:text-5xl h-[64.06px] flex items-center justify-center">
              Popular Courses
            </h2>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="absolute -bottom-4 right-0 transform translate-x-[20%]"
            >
              <svg
                width="180"
                height="24"
                viewBox="0 0 180 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M2 17.9071C45.3333 5.73809 125.6 -5.92291 178 17.9071"
                  stroke="#0B7077"
                  strokeWidth="4"
                  strokeLinecap="round"
                  variants={pathVariants}
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
        {/* Filter Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`px-5 py-2.5 rounded-full font-['Raleway'] font-medium text-xs cursor-pointer
                ${
                  selectedFilter === filter
                    ? "bg-[#133C8A] text-white"
                    : "bg-white text-[#818C96] border border-[#C4C4C4]"
                }
                transition-all duration-300 ease-in-out hover:shadow-sm`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>{" "}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {courses
            .filter(
              (course) =>
                selectedFilter === "All Programs" ||
                course.category === selectedFilter
            )
            .map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default PopularCourses;
