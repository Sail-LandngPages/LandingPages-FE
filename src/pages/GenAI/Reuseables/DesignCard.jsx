import gradientD from "../../../assets/GenAI-assets/gradientD.svg";

const DesignCard = ({ icon: Icon, title, description, iconColor }) => (
  <div className="relative flex flex-col justify-evenly items-center w-[322px] h-[285.33px] lg:w-[220px] lg:h-[380px] p-6 rounded-lg font-inter shadow-sm border border-gray-100 hover:shadow-lg transition-shadow ">
    <img src={gradientD} alt="" className="absolute top-0 right-0" />
    
    <div
      className={`w-6 h-12 ${iconColor} rounded-lg flex items-center justify-center mb-4`}
    >
      <Icon className="w-6 h-6 text-white" />
    </div>

    <h3 className="text-lg font-semibold text-[#1E293B] mb-2">{title}</h3>

    <p className="text-[#4B5563] leading-relaxed mb-4 text-center">{description}</p>

    <div className="flex justify-center gap-2">
      <div className="bg-[#818CF8] w-2 h-2 rounded-md"></div>
      <div className="bg-[#22D3EE] w-2 h-2 rounded-md"></div>
      <div className="bg-[#34D399] w-2 h-2 rounded-md"></div>
    </div>
  </div>
);

export default DesignCard;
