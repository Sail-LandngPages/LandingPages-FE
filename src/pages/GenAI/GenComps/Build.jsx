import { LuLoaderPinwheel } from "react-icons/lu";
import {
  IoBookOutline,
  IoMusicalNotes,
  IoBusinessSharp,
} from "react-icons/io5";
import { RiToolsFill } from "react-icons/ri";

import IconProps from "../Reuseables/IconProps";
import ExpCard from "../Reuseables/ExpCard";
import Project from "./Project";

const Build = () => {
  const features = [
    {
      icon: IoBookOutline,
      title: "AI Comic Strip",
      description: "Create engaging stories with AI-generated visuals and narratives",
      iconColor: "bg-gradient-to-r from-[#4F46E5] to-[#2563EB]",
    },
    {
      icon: IoMusicalNotes,
      title: "Music Generator",
      description: "Compose original music using AI algorithms and creativity",
      iconColor: "bg-gradient-to-r from-[#0891B2] to-[#059669]",
    },
    {
      icon: IoBusinessSharp,
      title: "Startup Idea",
      description: "Develop innovative AI-powered business solutions",
      iconColor: "bg-gradient-to-r from-[#059669] to-[#4F46E5]",
    },
    {
      icon: RiToolsFill,
      title: "Creative Tools",
      description: "Build custom AI applications for artists and creators",
      iconColor: "bg-gradient-to-r from-[#2563EB] to-[#0891B2]",
    },
  ];
  return (
    <section className=" w-full p-8 font-inter flex flex-col lg:flex-row items-center justify-evenly bg-[#F8FAFC] my-8  ">
      <div className="flex flex-col items-center lg:items-start justify-center gap-4 w-full lg:max-w-[50%]">
        <IconProps
          icon={<LuLoaderPinwheel />}
          text="Final Capstone Project"
          className=" text-indigo-600 bg-gradient-to-r from-[#E0E7FF] to-[#CFFAFE] w-[245px] h-[40px] border-none mt-8"
        />

        <h3 className="text-4xl md:text-5xl font-bold max-w-[85%] leading-tight text-left">
          Build Something{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E50F7] to-[#3C83F6]">
            Amazing
          </span>
        </h3>

        <p className="max-w-[85%] text-[20px] text-left">
          Participants will work in teams or individually to build and present a
          generative AI-powered project — from an AI comic strip to a music
          generator, or even an AI startup idea.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          {features.map((feature, index) => (
            <ExpCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              iconColor={feature.iconColor}
              className="shadow-sm border border-gray-100 hover:shadow-lg transition-shadow"
            />
          ))}
        </div>
      </div>

      <Project />
    </section>
  );
};

export default Build;
