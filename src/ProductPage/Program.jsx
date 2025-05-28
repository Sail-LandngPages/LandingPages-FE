import React from 'react'
import { 
  CheckCircle2, Users, BriefcaseBusiness, FileText, Clock, Award 
} from 'lucide-react';
import pix from "../assets/images/pix.png"
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
    <div>
         <section className="max-w-7xl mx-auto px-4 py-12 bg-white ml-10">
          <div className='h-22  overflow-hidden'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FAFAFA" fill-opacity="1" d="M0,256L120,213.3C240,171,480,85,720,53.3C960,21,1200,43,1320,53.3L1440,64L1440,0L1320,0C1200,0,960,0,720,0C480,0,240,0,120,0L0,0Z"></path></svg></div>
          
      {/* Header */}
      <header className="mb-8 space-y-4">
         

        <button className='bg-[#FBB404]'>
          
          <span className="inline-block  text-[#ffff] text-xs font-medium px-3 py-1 rounded-full">
          
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
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {/* Image */}
        <figure className="relative">
          {/* <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/22.05.2025_09.03.33_REC-GXu6J2eYKM7LWXerpHTdgpqolQ3jzt.png"
            alt="Students working on design sketches and wireframes"
            className="rounded-lg w-full object-cover"
          /> */}
          <img src={pix} alt="" className='rounded-lg w-100 object-cover ' />
          {/* Decorative dots */}
          {/* <div className="hidden md:block absolute -bottom-3 right-3  p-2 rounded-lg ">
            {[...Array(2)].map((_, row) => (
              <div key={row} className="flex space-x-3 mt-1 first:mt-0">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="block w-2 h-2 bg-blue-600 rounded-full" />
                ))}
              </div>
            ))}
          </div> */}
        </figure>

        {/* Benefits list */}
       <ul className="space-y-12">
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
      <div className="grid grid-cols-3  mt-10 gap-0.5 ">
        {/* {stats.map(({ number, label }) => (
          <div key={label}>
            <div className="text-2xl font-bold text-gray-900">{number}</div>
            <div className="text-sm text-gray-600">{label}</div>
          </div>
        ))} */}
        <Stats/>
      </div>
    </section>
    </div>
  )
}

export default Program