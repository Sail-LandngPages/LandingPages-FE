import { BsDisplay } from "react-icons/bs";
import { Computer } from "lucide-react";

const Project = () => {
  const projects = [
    { id: 1, color: "bg-[#E0E7FF]" },
    { id: 2, color: "bg-[#CFFAFE]" },
    { id: 3, color: "bg-[#D1FAE5]" },
  ];

  return (
      <div className="w-[327.33px] h-[385.33px] lg:w-[456px] p-6 bg-white rounded-lg shadow-lg">
        <div className="p-6 ">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-600 rounded-lg w-6 h-12 flex items-center justify-center">
              <Computer className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                Project Showcase
              </h1>
              <p className="text-gray-600 text-sm">
                Present your creation to industry experts
              </p>
            </div>
          </div>
        </div>

        <div className="px-10 space-y-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex items-center bg-[#F8FAFC] w-full h-[72px] space-x-4 px-3 rounded-lg"
            >
              <div
                className={`w-8 h-8 ${project.color} rounded-lg flex-shrink-0`}
              ></div>
              <div className="flex-1 space-y-1">
                <div className="h-2 bg-gray-200 rounded-full w-20"></div>
                <div
                  className={`h-2 bg-gray-200 rounded-full w-14
                `}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
  );
};

export default Project;
