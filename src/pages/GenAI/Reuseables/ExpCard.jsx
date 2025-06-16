
const ExpCard = ({ icon: Icon, title, description, iconColor, className = "" }) => (
  <div className={`relative flex flex-col justify-evenly items-center w-[342px] h-[221.33px] lg:w-[240px] lg:h-[270px] p-6 rounded-lg font-inter ${className}`}>
    <div
      className={`w-6 h-12 ${iconColor} rounded-lg flex items-center justify-center mb-4`}
    >
      <Icon className="w-6 h-6 text-white" />
    </div>

    <h3 className="text-lg font-semibold text-[#1E293B] mb-2">{title}</h3>

    <p className="text-[#4B5563] leading-relaxed mb-4 text-center">{description}</p>

  </div>
);

export default ExpCard;
