import { LiaGraduationCapSolid } from "react-icons/lia";
import { MdOutlineComputer } from "react-icons/md";
import { PiMicroscope } from "react-icons/pi";

import IconProps from "../Reuseables/IconProps";
import DesignCard from "../Reuseables/DesignCard";

const Design = () => {
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
    <section className="w-full p-8 font-inter flex flex-col items-center justify-center my-8 gap-4 bg-[#F8FAFC] ">
      <IconProps
        icon={<LiaGraduationCapSolid />}
        text="Who This Program is For"
        className=" text-indigo-600 bg-gradient-to-r from-[#E0E7FF] to-[#CFFAFE] w-[259px] h-[40px] border-none mt-8"
      />

      <h3 className="text-4xl md:text-5xl font-bold max-w-[85%] leading-tight text-center">
        Designed for{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E50F7] to-[#3C83F6]">
          Curious Minds
        </span>
      </h3>
      <p className="max-w-[90%] text-[20px]">
        No prior experience in AI is required — just curiosity and commitment.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
        {features.map((feature, index) => (
          <DesignCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            iconColor={feature.iconColor}
          />
        ))}
      </div>
    </section>
  );
};

export default Design;
