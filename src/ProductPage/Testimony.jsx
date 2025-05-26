import React from 'react'
import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

// Sample testimonial data
const testimonials = [
    {
      id: 1,
      name: "Nova Towne",
      quote:
        "Before XYZ, I didn't know where to start with UX/UI. Now I have a strong portfolio and I'm working as a junior product designer.",
      image: "/africalady.png?height=400&width=300",
    },
    {
      id: 2,
      name: "Jamie Rodriguez",
      quote:
        "The program gave me the skills and confidence to transition into web development. I landed a job within 3 months of graduating.",
      image: "/friendly.png?height=400&width=300",
    },
    {
      id: 3,
      name: "Alex Chen",
      quote:
        "The mentorship was invaluable. I went from knowing basic HTML to building full-stack applications that I'm proud to showcase.",
      image: "/mansuit.png?height=400&width=300",
    },
  ]

const Testimony = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextTestimonial = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }
  
    const prevTestimonial = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
    }

  return (
    <div>
      <section className="py-12 px-4 md:px-8 max-w-8xl mx-auto bg-[#FAFAFA]">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">Success Stories From Our Graduates</h2>
        <p className="text-gray-400 text-sm md:text-base">Everyone who has tried our program, loved it and helped them improve their knowledge in real - world situations</p>
      </div>

      <div className="bg-[#FAFAFA] rounded-lg  overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Image column */}
          <div className="w-full md:w-2/5 bg-[#FAFAFA] flex items-center  justify-center p-6">
            <div className="relative w-full max-w-xs aspect-[3/4] rounded-lg overflow-hidden">
              <img
                src={testimonials[currentIndex].image || "/placeholder.svg"}
                alt={testimonials[currentIndex].name}
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content column */}
          <div className="w-full md:w-3/5 p-6 md:p-10 flex flex-col justify-center">
            <div className="mb-6">
              <div className="text-9xl font-serif text-black mb-4 font-bold">"</div>
              <p className="text-gray-700 mb-6">{testimonials[currentIndex].quote}</p>
              <h3 className="font-medium text-lg">{testimonials[currentIndex].name}</h3>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-6">
              <div className="flex space-x-2">
                {/* {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full ${index === currentIndex ? "bg-blue-600" : "bg-gray-300"}`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <div className="flex space-x-2">
                <button
                  onClick={prevTestimonial}
                  className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={16} />
                </button> */}
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="bg-gray-50 p-4 flex justify-center">
          <div className="flex space-x-3 ">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.id}
                onClick={() => setCurrentIndex(index)}
                className={`relative w-12 h-12 rounded-md overflow-hidden ${
                  index === currentIndex ? "ring-2 ring-blue-600" : "opacity-50"
                }`}
                aria-label={`Select ${testimonial.name}'s testimonial`}
              >
                <image
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
    
  )
}

export default Testimony