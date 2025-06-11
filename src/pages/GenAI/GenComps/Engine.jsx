import IconProps from "../Reuseables/IconProps";
import { MdStarOutline } from "react-icons/md";

const Engine = () => {
  return (
    <section className="w-full py-[10px] font-inter flex flex-col items-center justify-center gap-4 ">
      <IconProps
        icon={<MdStarOutline />}
        text="What is Generative AI?"
        className=" text-indigo-600 bg-[linear-gradient(to_right,_#6366F11A_0%,_#22C55E1A_25%,_#06B6D41A_50%,_#A855F71A_75%,_#6366F11A_100%)] w-[247.33px] h-[41.33px] "
      />

      <div className="flex flex-col items-center text-center gap-6 max-w-[]">
        <h2 className="text-4xl md:text-5xl font-bold max-w-[70%] leading-tight">
          The Engine Behind Tomorrow's {" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E50F7] to-[#3C83F6]">
             Innovation 
          </span>
        </h2>
        <p className="max-w-[80%] text-[20px]">
          Generative AI refers to systems that can create text, images, music,
          code, and more — based on data and prompts. It's the engine behind
          tools like ChatGPT, DALL·E, and countless innovations transforming
          industries.
        </p>
        <p className="max-w-[70%] text-[18px]">
          Whether you're a developer, designer, creative, or strategist —
          generative AI is reshaping the way we think, build, and create.
        </p>
      </div>
    </section>
  );
};

export default Engine;
