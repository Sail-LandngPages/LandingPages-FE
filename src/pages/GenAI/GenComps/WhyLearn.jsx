import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import { TfiWorld } from "react-icons/tfi";
import { PiHandHeart } from "react-icons/pi";
import { MdPeopleOutline } from "react-icons/md";
import { LiaConnectdevelop } from "react-icons/lia";
import { FaRegHeart } from "react-icons/fa";

import IconProps from "../Reuseables/IconProps";
import ExpCard from "../Reuseables/ExpCard";

const WhyLearn = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  const features = [
    {
      icon: PiHandHeart,
      title: "Hands-On Learning",
      description: "Learn by doing with practical projects and real-world applications",
      iconColor: "bg-gradient-to-r from-[#4F46E5] to-[#2563EB]",
    },
    {
      icon: MdPeopleOutline,
      title: "Supportive Community",
      description: "Join a diverse community of learners and innovators",
      iconColor: "bg-gradient-to-r from-[#0891B2] to-[#059669]",
    },
    {
      icon: LiaConnectdevelop,
      title: "Industry Connections",
      description: "Connect with professionals and build valuable networks",
      iconColor: "bg-gradient-to-r from-[#059669] to-[#4F46E5]",
    },
    {
      icon: FaRegHeart,
      title: "Real-World Impact",
      description: "Create projects that make a difference in the world",
      iconColor: "bg-gradient-to-r from-[#2563EB] to-[#0891B2]",
    },
  ];

  return (
    <section className="w-full p-8 font-inter flex flex-col items-center justify-center my-8 gap-4">
      <IconProps
        icon={<TfiWorld />}
        text="Why Learn at SAIL?"
        className="text-indigo-600 bg-gradient-to-r from-[#E0E7FF] to-[#CFFAFE] w-[221px] h-[40px] border-none mt-8"
      />

      <h3
        className="text-4xl md:text-5xl font-bold max-w-[85%] leading-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-[#6E50F7] to-[#3C83F6]"
        data-aos="fade-up"
      >
        Inclusive, <span className="text-black">Accessible, </span>
        Transformative
      </h3>

      <p className="max-w-[90%] text-[20px] text-center" data-aos="fade-up" data-aos-delay="100">
        At SAIL Innovation Lab, we believe technology should be inclusive,
        accessible, and transformative. That's why we've created a learning
        environment where anyone — regardless of background — can thrive in the
        future of tech.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 my-8">
        {features.map((feature, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="h-full"
          >
            <ExpCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconColor={feature.iconColor}
              className="shadow-none border-none"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyLearn;
