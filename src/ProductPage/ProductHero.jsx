import React from 'react'
import man from '../assets/images/man.png'

const ProductHero = () => {
  return (
    <div>
        <div className="min-h-screen bg-[#FAFAFA] p-4 md:p-8 lg:p-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-[6%] right-[43.4%] w-16 h-16">
        <svg viewBox="0 0 100 100" className="w-full h-full">
          <path
            d="M50 0 L65 35 L100 50 L65 65 L50 100 L35 65 L0 50 L35 35 Z"
            fill="none"
            stroke="black"
            strokeWidth="1"
          />
        </svg>
      </div>
      <div className="absolute bottom-[1%] right-[50%] w-25 h-25 rounded-full bg-gray-300 opacity-70 " />
      <div className="absolute bottom-[1%] right-[10%] w-50 h-25 rounded-full bg-pink-200 opacity-70" />
      <div className="absolute bottom-[1%] right-[25%] w-80 h-25 rounded-full bg-pink-300 opacity-50" />
      <div className="absolute top-[75%] right-[20%] w-16 h-16 rounded-full bg-gray-200 opacity-60" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1">
            {/* Yellow pill button */}
            <div className="mb-8">
              <button className="bg-[#FBB404] text-white px-4 py-2 rounded-full flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Think in colours and Experience?
              </button>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Master Product Design <br />& UI/UX with US.
            </h1>

            {/* Description */}
            <p className="text-gray-600 mb-10 leading-relaxed justify-center text-center">
            The SAIL Product Design Learning Track is your gateway to mastering UI/UX design, 
            user research, and design thinking to create impactful digital experiences. Whether you’re a 
            beginner or looking to sharpen your skills, this program equips you with hands-on
             training and industry mentorship to help you succeed in the growing field of product design.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#apply"
                className="bg-[#133C8A] text-white px-8 py-3 rounded-md font-medium hover:bg-blue-800 transition-colors"
              >
                Apply now
              </a>
              <a
                href="#learn"
                className="border border-gray-300 text-gray-700 px-8 py-3 rounded-md font-medium hover:bg-gray-50 transition-colors"
              >
                Learn more
              </a>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            {/* Image container with border */}
            <div className="relative rounded-2xl overflow-hidden border-l border-r border-b  border-black w-112 ml-10">
              <div className="absolute top-4 right-8">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6 12L12 6M12 6L18 12M12 6V18"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
             
              <img src={man} alt="" width={350} height={350} className='ml-24 mt-12'/>
            </div>

            {/* Decorative sparkle */}
            <div className="absolute top-[10%] left-[5%]">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L14 8H20L15 12L17 18L12 14L7 18L9 12L4 8H10L12 2Z" stroke="white" strokeWidth="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductHero