import { LiaPenFancySolid } from "react-icons/lia";
import { IoImageOutline, IoCodeSharp } from "react-icons/io5";
import { LuMusic } from "react-icons/lu";

import FeatureCard from '../Reuseables/FeatureCard';

const Feature = () => {
  const features = [
    {
      icon: LiaPenFancySolid ,
      title: "Text Generation",
      description: "Create compelling content, articles, and copy with AI-powered writing tools.",
      iconColor: "bg-gradient-to-r from-[#4F46E5] to-[#2563EB]"
    },
    {
      icon: IoImageOutline,
      title: "Image Creation",
      description: "Generate stunning visuals, artwork, and designs from simple text descriptions.",
      iconColor: "bg-gradient-to-r from-[#0891B2] to-[#059669]"
    }, 
    {
      icon: LuMusic,
      title: "Audio & Music",
      description: "Compose music, generate sounds, and create audio content with AI assistance.",
      iconColor: "bg-gradient-to-r from-[#059669] to-[#4F46E5]"
    },
    {
      icon: IoCodeSharp,
      title: "Code Generation",
      description: "Write, debug, and optimize code with intelligent AI programming assistants.",
      iconColor: "bg-gradient-to-r from-[#2563EB] to-[#0891B2]"
    }
  ];

  return (
    <div className="mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            iconColor={feature.iconColor}
          />
        ))}
      </div>
    </div>
  ); 
};

export default Feature;