import { MdOutlineSettings, MdOutlineComputer } from "react-icons/md";
import { FaRegCalendar } from "react-icons/fa";
import { PiTelevisionSimpleDuotone } from "react-icons/pi";
import { GoGift } from "react-icons/go";

import IconProps from "../Reuseables/IconProps";
import ExpCard from "../Reuseables/ExpCard";

const Experience = () => {
  const features = [
    {
      icon: FaRegCalendar,
      title: "Duration",
      description:
        "4 weeks (Flexible Learning)",
      iconColor: "bg-gradient-to-r from-[#4F46E5] to-[#2563EB]",
    },
    {
      icon: MdOutlineComputer,
      title: "Mode",
      description:
        "Hybrid (In-person at SAIL + Online)",
      iconColor: "bg-gradient-to-r from-[#0891B2] to-[#059669]",
    },
    {
      icon: PiTelevisionSimpleDuotone,
      title: "Delivery",
      description: "Expert-Led Sessions, Workshops, Community Projects",
      iconColor: "bg-gradient-to-r from-[#059669] to-[#4F46E5]",
    },
    {
      icon: GoGift,
      title: "Bonus",
      description: "Access to exclusive AI tools & mentor support",
      iconColor: "bg-gradient-to-r from-[#2563EB] to-[#0891B2]",
    },
  ];
  return (
    <section className="w-full p-8 font-inter flex flex-col items-center justify-center my-8 gap-4 bg-[#F8FAFC] ">
      <IconProps
        icon={<MdOutlineSettings />}
        text="Program Format"
        className=" text-indigo-600 bg-gradient-to-r from-[#E0E7FF] to-[#CFFAFE] w-[195px] h-[40px] border-none mt-8"
      />

      <h3 className="text-4xl md:text-5xl font-bold max-w-[85%] leading-tight text-center">
        Flexible Learning{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E50F7] to-[#3C83F6]">
          Experience
        </span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
        {features.map((feature, index) => (
          <ExpCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            iconColor={feature.iconColor}
            className="shadow-sm border border-gray-100 hover:shadow-lg transition-shadow hover:bg-gradient-to-r from-[#E0E7FF] to-[#CFFAFE]"
          />
        ))}
      </div>
    </section>
  );
};

export default Experience;
