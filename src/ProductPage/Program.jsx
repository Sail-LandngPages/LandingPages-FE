

import { 
   Users, BriefcaseBusiness, FileText, Clock, Award 
} from 'lucide-react';
import pix from "../assets/images/pix.png"
import frame1 from "../assets/images/fram.png"
import framer from "../assets/images/framer.png"
import Stats from '../stats/Stats';
const benefits = [
  {
    title: "Practical Learning",
    description: "Work on real-world design projects.",
    icon: <BriefcaseBusiness className="w-5 h-5" />
  },
  {
    title: "Industry Experts",
    description: "Learn from top designers & UX professionals.",
    icon: <Users className="w-5 h-5" />
  },
  {
    title: "Job Readiness",
    description: "Build a portfolio that stands out in the industry.",
    icon: <FileText className="w-5 h-5" />
  },
  {
    title: "Flexible Learning Format",
    description: "Choose between online, hybrid, or in-person learning.",
    icon: <Clock className="w-5 h-5" />
  },
  {
    title: "100% Scholarship Available",
    description: "Limited slots for fully-funded training!",
    icon: <Award className="w-5 h-5" />
  },
];
  
  const stats = [
    { number: "2800+ ", label: "Graduates" } ,
    { number: "80% ", label: "Employment rate" } ,
    { number: "3000+", label: "Partner companies" } ,
  ];
  

const Program = () => {
  
   
  return (
    <div  >
         <section className="max-w-7xl mx-auto px-4 py-12 bg-[#ffff] "  data-aos="fade-up">
          <div className='h-22  overflow-hidden'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FAFAFA" fill-opacity="1" d="M0,256L120,213.3C240,171,480,85,720,53.3C960,21,1200,43,1320,53.3L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg></div>
          
      {/* Header */}
      <header className="mb-8 space-y-4 lg:ml-10">
         

        <button className='bg-[#FBB404] items-center text-white justify-center rounded-full flex hover:bg-[#133C8A]'>
           <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 -mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
          <span className="inline-block  text-[#ffff] text-xs font-medium px-3 py-1">
          
          Benefits
        </span>
        </button>
        <h2 className="text-3xl font-bold text-gray-900">Why Join This Program?</h2>
        <p className="text-gray-600 max-w-lg">
          Our program is designed to provide the hands‑on experience needed to enter the professional field. We focus on
          practical skills that employers actively seek in the job market.
        </p>
      </header>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-10 items-start lg:ml-10 ">
        {/* Image */}
        <figure className="relative">
          {/* <img src={framer} alt="" width={60} className='-mb-12 opacity-50 -ml-5'/> */}
          <img src={pix} alt="" className='rounded-lg w-100 object-cover ' />
          {/* Decorative dots */}
          {/* <img src={frame1} alt="" width={100} className='lg:ml-80 -mt-10 ml-74'/> */}
        </figure>

        {/* Benefits list */}
       <ul className="space-y-12 order-1">
  {benefits.map(({ title, description, icon }) => (
    <li key={title} className="flex gap-4">
      <div className="w-10 h-10 bg-[#133C8A] rounded-lg flex items-center justify-center text-white flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-[#000000]">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </li>
  ))}
</ul>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3  mt-10 gap-0.5 lg:ml-10 ">
       
        <Stats/>
      </div>
      {/* <div className='overflow-hidden -mt-50'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FAFAFA" fill-opacity="1" d="M0,256L80,261.3C160,267,320,277,480,282.7C640,288,800,288,960,250.7C1120,213,1280,139,1360,101.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg></div> */}
    </section>
    <div className='overflow-hidden lg:-mt-50 -mt-40'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FAFAFA" fill-opacity="1" d="M0,256L80,261.3C160,267,320,277,480,282.7C640,288,800,288,960,250.7C1120,213,1280,139,1360,101.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg></div>
    </div>
  )
}

export default Program