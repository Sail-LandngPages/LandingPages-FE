import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import IconProps from "../Reuseables/IconProps";
import WhyList from "./WhyList";
import CompShape from "../../../assets/GenAI-assets/compShape.png";
import { GoLightBulb } from "react-icons/go";

const Shape = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-out-cubic",
      once: false,
      offset: 120,
    });
  }, []);

  return (
    <section className="w-full p-4 font-inter flex flex-col lg:flex-row items-center justify-center my-8 gap-4">
      <div
        className="lg:max-w-[50%] flex flex-col items-start justify-center gap-5 mt-8"
        data-aos="fade-right"
        data-aos-delay="100"
      >
        <div data-aos="fade-up" data-aos-delay="200">
          <IconProps
            icon={<GoLightBulb />}
            text="Why This Program Matters"
            className="text-indigo-600 bg-gradient-to-r from-[#E0E7FF] to-[#CFFAFE] w-[276px] h-[40px] border-none hover:shadow-md transition-shadow duration-300"
          />
        </div>

        <h3
          className="text-4xl md:text-5xl font-bold max-w-[85%] leading-tight text-left"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Shape the Future of{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E50F7] to-[#3C83F6]">
            AI Innovation
          </span>
        </h3>

        <p
          className="max-w-[90%] text-[20px]"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          In a world where content and creativity are being automated and
          amplified, this program gives you the hands-on skills and strategic
          understanding to not just use GenAI tools — but to shape how they're
          used.
        </p>

        <div data-aos="fade-up" data-aos-delay="500">
          <WhyList />
        </div>
      </div>

      <div
        className="bg-[linear-gradient(to_top_right,_#6366F11A_0%,_#22C55E1A_25%,_#06B6D41A_50%,_#A855F71A_75%,_#6366F11A_100%)] w-[342px] h-[316px] md:w-[720px] lg:w-[456px] flex flex-col items-center justify-evenly transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:rounded-2xl overflow-hidden group"
        data-aos="fade-left"
        data-aos-delay="200"
      >
        <div data-aos="zoom-in" data-aos-delay="600">
          <img
            src={CompShape}
            alt="Pattern Shape"
            className="transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
          />
        </div>

        <div data-aos="slide-up" data-aos-delay="700">
          <IconProps
            icon={<GoLightBulb />}
            text="AI-Powered Innovation"
            className="w-[209px] h-9 bg-gradient-to-r from-[#4F46E5] to-[#2563EB] text-white rounded-md hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Shape;
