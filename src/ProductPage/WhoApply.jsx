import React from 'react'
import africaman from '../assets/images/africaman.png'

const WhoApply = () => {
  return (
    <div>
        <div className="w-full bg-[#133C8A] text-white rounded-lg overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row items-center">
        {/* Left side with image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-6 md:mb-0">
          <div className="bg-white rounded-full p-1 w-48 h-48 flex items-center justify-center">
            {/* <image
              src="/placeholder.svg?height=180&width=180"
              alt="Person giving thumbs up"
              width={180}
              height={180}
              className="rounded-full"
            /> */}
            <img src={africaman} alt="" width={180} height={180} className='rounded-full' />
          </div>
        </div>

        {/* Right side with content */}
        <div className="w-full md:w-2/3 md:pl-8">
          <div className="mb-6">
            <div><p  className="inline-block bg-yellow-500 h-1 w-12 mb-2"> Audience</p></div>
            <h2 className="text-2xl md:text-3xl font-bold">Who Should Apply?</h2>
            <p className="text-sm md:text-base mt-2 text-blue-100">
            No prior design experience is needed—just a passion for creating great experiences!
            </p>
          </div>

          <div className="space-y-4">
            {/* Item 1 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white text-blue-800 flex items-center justify-center font-bold mr-3">
                
              </div>
              <div>
                <p className="font-semibold">
                Women and young professionals eager to build a career in product design.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white text-blue-800 flex items-center justify-center font-bold mr-3">
                
              </div>
              <div>
                <p className="font-semibold">Creatives, problem-solvers, and tech enthusiasts interested in UX/UI.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white text-blue-800 flex items-center justify-center font-bold mr-3">
                
              </div>
              <div>
                <p className="font-semibold">You…Definitely YOU</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default WhoApply