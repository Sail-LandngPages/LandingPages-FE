import React from 'react'
import { useState } from "react"


// Sample testimonial data
const testimonials = [
    {
      id: 1,
      name: "Nova Towne",
      quote: "Before XYZ, I didn't know where to start with UX/UI. Now I have a strong portfolio and I'm working as a junior product designer.",
      image: "/africalady.png?height=400&width=300",
    },
    {
      id: 2,
      name: "Jamie Rodriguez",
      quote: "The program gave me the skills and confidence to transition into web development. I landed a job within 3 months of graduating.",
      image: "/friendly.png?height=400&width=300",
    },
    {
      id: 3,
      name: "Alex Chen",
      quote: "The mentorship was invaluable. I went from knowing basic HTML to building full-stack applications that I'm proud to showcase.",
      image: "/mansuit.png?height=400&width=300",
    },
]

const Testimony = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  return (
    <div>
      <section className="py-12 px-4 md:px-8 max-w-8xl mx-auto bg-[#FAFAFA]">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Success Stories From Our Graduates</h2>
          <p className="text-gray-400 text-sm md:text-base">Everyone who has tried our program, loved it and helped them improve their knowledge in real - world situations</p>
        </div>

        <div className="bg-[#FAFAFA] rounded-lg overflow-hidden">
          <div className="flex flex-col md:flex-row">
            {/* Image column */}
            <div className="w-full md:w-2/5 bg-[#FAFAFA] flex items-center justify-center p-6">
              <div className="relative w-full max-w-xs aspect-[3/4] rounded-lg overflow-hidden">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>

            {/* Content column */}
            <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col justify-center">
              <div className="mb-6">
                <div className="text-9xl font-serif text-black mb-4 font-bold">"</div>
                <p className="text-gray-700 mb-6">{testimonials[currentIndex].quote}</p>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-6">
                <div className="flex space-x-2">
                  <div className="flex items-center justify-between w-full max-w-4xl mx-auto p-6">
                    {/* Left section */}
                    <div className="flex flex-col items-start space-y-4">
                      <h2 className="text-lg font-medium text-gray-800">{testimonials[currentIndex].name}</h2>
                      
                      {/* Button and Stepper */}
                      <div className="flex items-center space-x-4">
                        <button 
                          onClick={handleNext}
                          className="bg-blue-700 hover:bg-blue-800 text-white text-sm font-semibold px-5 py-2 rounded-full flex items-center space-x-2"
                        >
                          <span>Next</span>
                          <span className="text-lg">&rarr;</span>
                        </button>

                        {/* Stepper */}
                        <div className="flex items-center space-x-2">
                          {testimonials.map((_, index) => (
                            <React.Fragment key={index}>
                              <div 
                                className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-700' : 'bg-blue-200'}`} 
                              />
                              {index < testimonials.length - 1 && (
                                <div className="w-10 h-1 bg-blue-200" />
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Right section - Images */}
                    <div className="flex space-x-4">
                      {testimonials.filter((_, index) => index !== currentIndex).slice(0, 2).map((testimonial, index) => (
                        <div key={index} className="w-24 h-32 bg-blue-900 bg-opacity-60 rounded overflow-hidden">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="object-cover w-full h-full mix-blend-overlay"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    
  )
}

export default Testimony