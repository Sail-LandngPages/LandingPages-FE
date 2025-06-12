import { LiaGraduationCapSolid } from "react-icons/lia";

import IconProps from "../Reuseables/IconProps";
import ExpertCard from "../Reuseables/ExpertCard";

const Expert = () => {
  const features = [
    {
      personName: "Dr. Sarah Chen",
      title: "AI Research Lead",
      description: "PhD in Machine Learning, former Google AI researcher with 10+years experience in generative AI systems.",
      iconColor: "bg-gradient-to-r from-[#4F46E5] to-[#2563EB]",
    },
    {
      personName: "Marcus Rivera",
      title: "Creative Technologist",
      description: "Award-winning designer and developer specializing in AI-powered creative applications and interactive experiences.",
      iconColor: "bg-gradient-to-r from-[#0891B2] to-[#059669]",
    },
    {
      personName: "Prof. Aisha Patel",
      title: "Education Director",
      description:"Passionate educator with expertise in making complex AI concepts accessible to learners from all backgrounds.",
      iconColor: "bg-gradient-to-r from-[#059669] to-[#4F46E5]",
    },
  ];
  return (
    <section className="w-full p-8 font-inter flex flex-col items-center justify-center my-8 gap-4">
      <IconProps
        icon={<LiaGraduationCapSolid />}
        text="Meet Your Facilitators"
        className=" text-indigo-600 bg-gradient-to-r from-[#E0E7FF] to-[#CFFAFE] w-[240px] h-[40px] border-none mt-8"
      />

      <h3 className="text-4xl md:text-5xl font-bold max-w-[85%] leading-tight text-center">
        Learn from{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E50F7] to-[#3C83F6]">
          Industry Experts
        </span>
      </h3>

      <p className="max-w-[75%] text-[20px] text-center">
        You'll be learning from a multidisciplinary team of AI engineers,
        creative technologists, and educators shaping the future of tech and
        innovation.
      </p>

      <div className="flex flex-wrap justify-center gap-6 my-8">
        {features.map((feature, index) => (
          <ExpertCard
            key={index}
            personName={feature.personName}
            title={feature.title}
            description={feature.description}
            iconColor={feature.iconColor}
          />
        ))}
      </div>
    </section>
  );
};

export default Expert;
