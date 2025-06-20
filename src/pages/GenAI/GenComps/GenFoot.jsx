import IconProps from "../Reuseables/IconProps";
import Button from "../Reuseables/Button";

import { MdAccessTime } from "react-icons/md";
import { LiaTrophySolid } from "react-icons/lia";
import { IoChatbubbleOutline, IoStarOutline } from "react-icons/io5";
import { BsDownload } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import { CiEdit } from "react-icons/ci";

const GenFoot = () => {
  return (
    <section className="bg-[linear-gradient(to_bottom_right,_#4F46E5_0%,_#2563EB_50%,_#0891B2_100%)] w-full p-8 flex flex-col items-center justify-center font-inter text-white text-center ">
      <div className="">
        <IconProps
          icon={<FiEdit />}
          text="Apply Now"
          className="w-[155px] py-2 px-6 h-[41.33px] bg-white/20 mt-4"
        />
      </div>

      <div className="flex flex-col items-center mt-4 space-y-4">
        <h3 className="text-5xl md:text-6xl lg:text-7xl font-bold text-center text-white leading-tight max-w-4xl">
          Ready to Shape the future?
        </h3>

        <p className=" text-center w-[318px] md:w-[545.3px] ">
          Spots are limited. We're offering <b>50 scholarship slots</b> for
          passionate and curious learners.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 w-full">
          <Button
            icon={<CiEdit />}
            text="Apply Now"
            href="#"
            className="w-[191px] bg-white text-[#4F46E5] font-semibold shadow-md transition duration-300 hover:shadow-indigo-300 hover:shadow-lg hover:scale-105"
          />
          <Button
            icon={<BsDownload />}
            text="Download Curriculum"
            href="#"
            className="w-[288px] text-white border-2 shadow-md transition duration-300 hover:shadow-blue-400/60 hover:shadow-lg hover:scale-105"
          />
          <Button
            icon={<IoChatbubbleOutline />}
            text="Talk to Advisor"
            href="#"
            className="w-[230px] text-white border-2 shadow-md transition duration-300 hover:shadow-blue-400/60 hover:shadow-lg hover:scale-105"
          />
        </div>

        <div className="flex flex-wrap items-center justify-center gap-6 mt-4 px-4">
          <IconProps
            icon={<MdAccessTime />}
            text="Application closes soon"
            className="border-none text-white"
          />
          <IconProps
            icon={<LiaTrophySolid />}
            text="Limited scholarships"
            className="border-none text-white"
          />
          <IconProps
            icon={<IoStarOutline />}
            text="Start immediately"
            className="border-none text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default GenFoot;
