import { Check } from "lucide-react";

const CurriculumList = ({ title, description, className="" }) => {
  return (
    <div className="flex items-start gap-3 max-w-[85%] lg:max-w-full">
      <div className={`flex justify-center items-center w-4 h-8 mt-1 rounded-lg border ${className}`}>
        <Check className="w-4 h-4 text-white" />
      </div>

      <div>
        <h4 className="font-semibold text-[18px]">{title}</h4>
        <p className="text-[#4B5563]">{description}</p>
      </div>
    </div>
  );
};
export default CurriculumList;
