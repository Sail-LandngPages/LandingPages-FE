

import { 
   Users, BriefcaseBusiness, FileText, Clock, Award 
} from 'lucide-react';
import pix from "../assets/images/picture.png"
import frame1 from "../assets/images/fram.png"
import framer from "../assets/images/framer.png"
import Stats from '../stats/Stats';
import { motion } from "framer-motion";
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
    <div>
  <section className="max-w-7xl mx-auto px-4 py-12 bg-[#ffff]" data-aos="fade-up">
    {/* Wave SVG at top */}
    <div className="w-full overflow-hidden">
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320"
        className="w-full"
        style={{height: 'auto'}}
      >
        <path 
          fill="#FAFAFA" 
          fillOpacity="1" 
          d="M0,256L120,213.3C240,171,480,85,720,53.3C960,21,1200,43,1320,53.3L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"
        ></path>
      </svg>
    </div>

    {/* Main content with scroll animations */}
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.8,
        ease: [0.16, 0.77, 0.47, 0.97] // Custom easing curve
      }}
      viewport={{ once: false, margin: "-100px" }}
      className="relative"
    >
      {/* Header */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="absolute -bottom-4 right-0 transform translate-x-[20%]"
      ></motion.div>

      <header className="mb-8 space-y-4 lg:ml-10">
        <motion.button 
          className='bg-[#FBB404] items-center text-white justify-center rounded-full flex hover:bg-[#133C8A]'
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
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
          <span className="inline-block text-[#ffff] text-xs font-medium px-3 py-1">
            Benefits
          </span>
        </motion.button>
     
        <motion.h2 
          className="text-3xl font-bold text-gray-900"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
        >
          Why Join This Program?
        </motion.h2>
        <motion.p 
          className="text-gray-600 max-w-lg"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          Our program is designed to provide the hands‑on experience needed to enter the professional field. We focus on
          practical skills that employers actively seek in the job market.
        </motion.p>
      </header>

      {/* Content with staggered animations */}
      <div className="grid md:grid-cols-2 gap-10 items-start lg:ml-10">
        {/* Image */}
        <motion.figure 
          className="relative order-2 md:order-none"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
        >
          <img src={pix} alt="" className='rounded-lg w-full object-cover' />
        </motion.figure>

        {/* Benefits list */}
        <motion.ul 
          className="space-y-12 order-1 md:order-none"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          {benefits.map(({ title, description, icon }, index) => (
            <motion.li 
              key={title} 
              className="flex gap-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              <div className="w-10 h-10 bg-[#133C8A] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                {icon}
              </div>
              <div>
                <h3 className="font-bold text-[#000000]">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* Stats */}
      <motion.div 
        className="grid grid-cols-3 mt-3 gap-0.5 lg:ml-10 ml-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Stats/>
      </motion.div>
    </motion.div>
  </section>
  
  {/* Bottom wave with animation */}
  <motion.div 
    className='overflow-hidden lg:-mt-50 -mt-40'
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
      <path fill="#FAFAFA" fillOpacity="1" d="M0,256L80,261.3C160,267,320,277,480,282.7C640,288,800,288,960,250.7C1120,213,1280,139,1360,101.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
    </svg>
  </motion.div>
</div>
    
  )
}

export default Program