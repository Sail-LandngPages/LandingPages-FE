import React from 'react';
import { Check } from 'lucide-react';

const why = [
  {
    title: 'Understand Core Concepts',
    description: 'Master the fundamental principles of generative AI and machine learning',
    gradient: 'from-[#4F46E5] to-[#2563EB]',
  },
  {
    title: 'Build Real Projects',
    description: 'Create portfolio-worthy projects using state-of-the-art AI tools',
    gradient: 'from-[#0891B2] to-[#059669]',
  },
  {
    title: 'Solve Real Problems',
    description: 'Apply AI creatively to address real-world challenges and opportunities',
    gradient: 'from-[#059669] to-[#4F46E5]',
  },
  {
    title: 'Ethical Deployment',
    description: 'Learn to deploy GenAI ethically and effectively in your domain',
    gradient: 'from-[#2563EB] to-[#0891B2]',
  },
];

const WhyList = () => {
  return (
    <div className="space-y-4 mt-4 px-1">
      {why.map((item, index) => (
        <div key={index} className="flex items-start space-x-3">
          <div
            className={`mt-1 w-3 h-6 flex items-center justify-center rounded-lg bg-gradient-to-r ${item.gradient}`}
          >
            <Check className="w-3 h-3 text-white" />
          </div>
          
          <div>
            <h4 className="font-semibold text-[#1E293B]">{item.title}</h4>
            <p className="text-[#4B5563]">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyList;
