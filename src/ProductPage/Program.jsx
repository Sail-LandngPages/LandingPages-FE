import React from 'react'
import { CheckCircle } from "lucide-react";
import pix from "../assets/images/pix.png"
const benefits = [
    {
      title: "Practical Learning",
      description: "Learn by doing with real‑world projects and case studies",
    },
    {
      title: "Industry Experts",
      description: "Learn from professionals with years of experience",
    },
    {
      title: "Job Readiness",
      description: "Develop skills that employers are looking for",
    },
    {
      title: "Flexible Learning Format",
      description: "Study at your own pace with our flexible program",
    },
    {
      title: "100% Scholarship Available",
      description: "Financial support available for qualified students",
    },
  ];
  
  const stats = [
    { number: "2800+", label: "Graduates" },
    { number: "80%", label: "Employment rate" },
    { number: "3000+", label: "Partner companies" },
  ];
  

const Program = () => {
  return (
    <div>
         <section className="max-w-7xl mx-auto px-4 py-12 bg-white">
      {/* Header */}
      <header className="mb-8 space-y-4">
        <span className="inline-block bg-[#FBB404] text-[#ffff] text-xs font-medium px-3 py-1 rounded-full">
          Benefits
        </span>
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
          <img src={pix} alt="" className='rounded-lg w-120 object-cover ' />
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
          {benefits.map(({ title, description }) => (
            <li key={title} className="flex gap-4">
              <div className="w-10 h-10 bg-[#133C8A] rounded-lg flex items-center justify-center text-white flex-shrink-0">
                <CheckCircle className="w-5 h-5" />
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
      <div className="grid grid-cols-3  mt-10 ">
        {stats.map(({ number, label }) => (
          <div key={label}>
            <div className="text-2xl font-bold text-gray-900">{number}</div>
            <div className="text-sm text-gray-600">{label}</div>
          </div>
        ))}
      </div>
    </section>
    </div>
  )
}

export default Program