import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { LiaGraduationCapSolid } from "react-icons/lia";
import { MdOutlineComputer } from "react-icons/md";
import { PiMicroscope } from "react-icons/pi";

import IconProps from "../Reuseables/IconProps";
import DesignCard from "../Reuseables/DesignCard";

const Design = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 120,
    });
  }, []);

  const features = [
    {
      icon: MdOutlineComputer,
      title: "Tech Enthusiasts",
      description:
        "Developers interested in AI systems and cutting-edge technology applications",
      iconColor: "bg-gradient-to-r from-[#4F46E5] to-[#2563EB]",
    },
    {
      icon: MdOutlineComputer,
      title: "Creatives",
      description:
        "Designers looking to enhance their creative work with AI-powered tools.",
      iconColor: "bg-gradient-to-r from-[#0891B2] to-[#059669]",
    },
    {
      icon: PiMicroscope,
      title: "Students",
      description:
        "Researchers in STEM and digital arts exploring AI applications",
      iconColor: "bg-gradient-to-r from-[#059669] to-[#4F46E5]",
    },
    {
      icon: PiMicroscope,
      title: "Entrepreneurs",
      description:
        "Ready to prototype AI-powered solutions and innovative startups",
      iconColor: "bg-gradient-to-r from-[#2563EB] to-[#0891B2]",
    },
  ];

  return (
    <section className="w-full p-8 font-inter flex flex-col items-center justify-center my-8 gap-4 bg-[#F8FAFC] overflow-hidden">
      <div
        data-aos="fade-down"
        data-aos-delay="100"
      >
        <IconProps
          icon={<LiaGraduationCapSolid />}
          text="Who This Program is For"
          className="text-indigo-600 bg-gradient-to-r from-[#E0E7FF] to-[#CFFAFE] w-[259px] h-[40px] border-none mt-8 hover:shadow-md transition-shadow duration-300"
        />
      </div>

      <h3 
        className="text-4xl md:text-5xl font-bold max-w-[85%] leading-tight text-center"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Designed for{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E50F7] to-[#3C83F6]">
          Curious Minds
        </span>
      </h3>

      <p 
        className="max-w-[90%] text-[20px] text-center"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        No prior experience in AI is required — just curiosity and commitment.
      </p>

      <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {features.map((feature, index) => (
          <div
            key={index}
            data-aos="zoom-in"
            data-aos-delay={500 + (index * 200)}
          >
            <DesignCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconColor={feature.iconColor}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Design;