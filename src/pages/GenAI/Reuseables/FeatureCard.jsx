const FeatureCard = ({ icon: Icon, title, description, iconColor }) => (
  <div className="w-[342px] h-[234.98px] lg:w-[220px] lg:h-[274.98px] rounded-lg font-inter shadow-sm border border-gray-100 hover:shadow-lg transition-shadow ">
    <div className="h-1 bg-gradient-to-r from-[#6366F1] to-[#06B6D4]"></div>

    <div className="p-6">
        <div className={`w-6 h-12 ${iconColor} rounded-lg flex items-center justify-center mb-4`}>
        <Icon className="w-6 h-6 text-white" />
        </div>
        
        <h3 className="text-lg font-semibold text-[#1E293B] mb-2">
        {title}
        </h3>
        
        <p className="text-[#4B5563] text-sm leading-relaxed mb-4">
        {description}
        </p>
        
        <div className="flex items-top gap-1">
        {Array.from({ length: 8 }, (_, i) => (
            <div
            key={i}
            className="bg-gradient-to-b from-[#818CF8] to-[#E5E7EB] rounded-full"
            style={{
                width: '4px',
                height: `${Math.random() * 15 + 15}px`
            }}
            />
        ))}
        </div>
    </div>
  </div> 
);

export default FeatureCard;