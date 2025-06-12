import gb1 from "../../../assets/GenAI-assets/gb1.svg";
import gb2 from "../../../assets/GenAI-assets/gb2.svg";
import gb3 from "../../../assets/GenAI-assets/gb3.svg";
import gb4 from "../../../assets/GenAI-assets/gb4.svg";
import divider from "../../../assets/GenAI-assets/divider.svg";
import Plane from "../../../assets/GenAI-assets/plane.svg";

import compSm from "../../../assets/GenAI-assets/componentSM.svg";
import compLG from "../../../assets/GenAI-assets/componentLG.svg";
import ArrowDown from "../../../assets/GenAI-assets/arrowDown.svg";

import IconProps from "../Reuseables/IconProps";
import Button from "../Reuseables/Button";
import FloatingCircles from "../Reuseables/Floatingcircles";

import { MdAccessTime } from "react-icons/md";
import { SlPeople } from "react-icons/sl";
import { LiaCertificateSolid } from "react-icons/lia";
import { IoPlayOutline } from "react-icons/io5";
import { BsDownload } from "react-icons/bs";

const GRADIENT_STYLE = {
  backgroundImage:
    "linear-gradient(to right, #667EEA 0%, #764BA2 25%, #f093FB 50%, #F5576C 75%, #4FACFE 100%)",
};

const GenHero = () => {
  return (
    <section className="bg-[linear-gradient(135deg,_#0f172a_0%,_#312e81_50%,_#164e63_100%)]  w-full py-[15px] min-h-[calc(100vh-80px)] relative flex items-center justify-center overflow-hidden font-inter ">
      <FloatingCircles />

      <div className="flex flex-col w-full justify-around h-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <div className="flex justify-between items-center m-15">
          <img src={gb1} alt="" className="w-[160px]" />
          <img src={gb2} alt="" className="w-[128px]" />
        </div>
        <div className="flex justify-between items-center m-15">
          <img src={gb3} alt="" className="w-[144px]" />
          <img src={gb4} alt="" className="w-[112px]" />
        </div>
      </div>

      <div className="flex justify-evenly w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        {Array.from({ length: 20 }).map((_, i) => (
          <img key={i} src={divider} alt="" />
        ))}
      </div>

      <div className="flex justify-evenly w-full absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <img src={compSm} alt="" className="lg:hidden" />
        <img src={compLG} alt="" className="hidden lg:block" />
      </div>

      <main className="relative z-10 flex flex-col items-center justify-between h-full text-center">
        <div className="">
          <IconProps
            img={Plane}
            text="Welcome to the Future"
            className="w-[246px] py-2 px-6 h-[41.33px] bg-white/20"
          />
        </div>

        <div className="flex flex-col items-center mt-4 space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center text-white leading-tight max-w-4xl">
            <span
              className="text-transparent bg-clip-text"
              style={GRADIENT_STYLE}
            >
              Generative AI
            </span>
            <br />
            at SAIL Innovation Lab
          </h1>

          <h3 className="text-[#CFFAFE] text-center w-[318px] md:w-[545.3px] ">
            Explore the possibilities. Build the unimaginable.
          </h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
            <Button
              icon={<IoPlayOutline />}
              text="Start Your Journey"
              href="#"
              className="w-[260px] bg-gradient-to-r from-[#4F46E5] to-[#2563EB] text-white"
            />
            <Button
              icon={<BsDownload />}
              text="Download Curriculum"
              href="#"
              className="w-[288px] bg-white text-[#4F46E5] border-2"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6 mt-4">
            <IconProps
              icon={<MdAccessTime />}
              text="4 Weeks Program"
              className="w-[174.33px] h-[37.33px] py-[16.67px] px-[8.67px] bg-white/20"
            />
            <IconProps
              icon={<SlPeople />}
              text="50 Scholarship Slots"
              className="w-[193.33px] h-[37.33px] py-[16.67px] px-[8.67px] bg-white/20 "
            />
            <IconProps
              icon={<LiaCertificateSolid />}
              text="Certificate Included"
              className="w-[188.33px] h-[37.33px] py-[16.67px] px-[8.67px] bg-white/20"
            />
          </div>
        </div>

        <div className="w-8 mt-6">
          <img src={ArrowDown} alt="" className="animate-bounce" />
        </div>
      </main>
    </section>
  );
};

export default GenHero;
