import { MdOutlinePerson } from "react-icons/md";

const ExpertCard = ({ personName, title, description, iconColor }) => (
  <div className="relative flex flex-col justify-evenly items-center w-[342px] h-[369.33px] lg:w-[304px] lg:h-[389.33px] p-6 rounded-lg font-inter shadow-sm border border-gray-100 hover:shadow-lg transition-shadow ">
    <div
      className={`w-12 h-24 ${iconColor} rounded-3xl flex items-center justify-center mb-4`}
    >
      <p className="text-[48px] text-white">
        <MdOutlinePerson />
      </p>
    </div>

    <h3 className="text-lg font-semibold text-[#1E293B] mb-2">{personName}</h3>

    <h4 className="text-lg text-indigo-600 mb-2">{title}</h4>

    <p className="text-[#4B5563] leading-relaxed mb-4 text-center">
      {description}
    </p>

    <div className="flex justify-center items-center gap-3">
      <div>
          <div className="w-8 h-1 rounded-md bg-gradient-to-r from-[#818CF8] to-[#60A5FA]"></div>
          <p className="text-[#6B7280] font-sm text-center">AI</p>
      </div>

      <div>
          <div className="w-8 h-1 rounded-md bg-gradient-to-r from-[#22D3EE] to-[#34D399]"></div>
          <p className="text-[#6B7280] font-sm text-center">ML</p>
      </div>

      <div>
          <div className="w-8 h-1 rounded-md bg-gradient-to-r from-[#34D399] to-[#818CF8]"></div>
          <p className="text-[#6B7280] font-sm text-center">Gen</p>
      </div>
      
    </div>
  </div>
);

export default ExpertCard;
