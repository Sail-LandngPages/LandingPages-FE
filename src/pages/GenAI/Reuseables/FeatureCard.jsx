import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "easeOut",
      duration: 0.5,
    },
  },
};

const FeatureCard = ({ icon: Icon, title, description, iconColor }) => (
  <motion.div
    className="group w-[342px] h-[234.98px] lg:w-[220px] lg:h-[274.98px] rounded-lg font-inter shadow-sm border border-gray-100 hover:shadow-lg transition-shadow relative overflow-hidden"
    variants={cardVariants}
  >
    <div className="relative h-1 w-full bg-transparent">
      <div className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#6366F1] to-[#06B6D4] w-full transition-all duration-500 group-hover:w-0"></div>
    </div>

    <div className="p-6">
      <div
        className={`w-6 h-12 ${iconColor} rounded-lg flex items-center justify-center mb-4`}
      >
        <Icon className="w-6 h-6 text-white" />
      </div>

      <h3 className="text-lg font-semibold text-[#1E293B] mb-2">{title}</h3>

      <p className="text-[#4B5563] text-sm leading-relaxed mb-4">
        {description}
      </p>

      <div className="flex items-top gap-1">
        {Array.from({ length: 8 }, (_, i) => (
          <div
            key={i}
            className="bg-gradient-to-b from-[#818CF8] to-[#E5E7EB] rounded-full"
            style={{
              width: "4px",
              height: `${Math.random() * 15 + 15}px`,
            }}
          />
        ))}
      </div>
    </div>
  </motion.div>
);

export default FeatureCard;