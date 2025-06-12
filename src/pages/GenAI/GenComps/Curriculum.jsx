import { LuBrain } from "react-icons/lu";

import IconProps from "../Reuseables/IconProps";
import CurriculumList from "../Reuseables/CurriculumList";

import dots from "../../../assets/GenAI-assets/dots.svg";

const Curriculum = () => {
  return (
    <section className="w-full py-8 font-inter flex flex-col items-center justify-center my-8 gap-4 ">
      <IconProps
        icon={<LuBrain />}
        text="What You'll Learn"
        className=" text-indigo-600 bg-gradient-to-r from-[#E0E7FF] to-[#CFFAFE] w-[205px] h-[40px] border-none mx-6"
      />

      <h3 className="text-4xl md:text-5xl font-bold max-w-[85%] leading-tight text-center">
        Comprehensive{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E50F7] to-[#3C83F6]">
          AI Curriculum 
        </span>
      </h3>

      <div className="w-full flex flex-col lg:flex-row justify-evenly items-center gap-6 m-6 ">
        <div className="flex flex-col gap-4 lg:w-[310px]">
          <CurriculumList
            title="Fundamentals of AI & Machine Learning"
            description="Build a solid foundation in AI concepts, algorithms, and applications"
            className="bg-gradient-to-r from-[#4F46E5] to-[#2563EB]"
          />
          <CurriculumList
            title="Prompt Engineering & LLMs"
            description="Master the art of communicating effectively with large language models"
            className="bg-gradient-to-r from-[#0891B2] to-[#059669]"
          />
          <CurriculumList
            title="Image, Video & Music Generation"
            description="Create stunning multimedia content using generative AI tools"
            className="bg-gradient-to-r from-[#059669] to-[#4F46E5]"
          />

        </div>

      <div className="bg-[linear-gradient(to_top_right,_#6366F11A_0%,_#22C55E1A_25%,_#06B6D41A_50%,_#A855F71A_75%,_#6366F11A_100%)] w-[342px] h-[316px] md:w-[720px] lg:w-[304px] flex items-center justify-evenly rounded-lg">
            <img src={dots} alt="Decorative Dots" className="w-32 h-32" />
        </div>

        <div className="flex flex-col gap-4 lg:w-[300px]">
          <CurriculumList
            title="Ethical & Responsible AI Use"
            description="Navigate the ethical considerations and responsible deployment of AI"
            className="bg-gradient-to-r from-[#2563EB] to-[#0891B2]"
          />
          <CurriculumList
            title="Hands-on Tools"
            description="ChatGPT, DALL·E, Runway, Pika Labs, GitHub Copilot, and more"
            className="bg-gradient-to-r from-[#4F46E5] to-[#2563EB]"
          />
          <CurriculumList
            title="Build Your First AI Project"
            description="From concept to completion - create your own AI-powered solution"
            className="bg-gradient-to-r from-[#0891B2] to-[#059669]"
          />

        </div>
      </div>
    </section>
  );
};

export default Curriculum;
