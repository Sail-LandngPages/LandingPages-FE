import React from 'react'
import africaman from '../assets/images/africaman.png'
import '../styles/tailwind.css'

const WhoApply = () => {
  return (
    <div className='bg-[#FAFAFA] '>
      <div className='-mb-30'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#133C8A" fill-opacity="1" d="M0,192L80,186.7C160,181,320,171,480,149.3C640,128,800,96,960,96C1120,96,1280,128,1360,144L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </div>
        <div className="w-full bg-[#133C8A] text-white  overflow-hidden mt-20  ">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row items-center">
        {/* Left side with image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start mb-6 md:mb-0">
          <div className="bg-white rounded-lg p-1 w-90 h-90 flex items-center justify-center">
           
            <img src={africaman} alt="" width={340} height={340} className='rounded-lg' />
          </div>
        </div>

        {/* Right side with content */}
        <div className="w-full md:w-2/3 md:pl-8">
          <div className="mb-6">
            <button  className="inline-block  rounded-full w-30  mb-2 bg-[#FBB404] hover:bg-[#]">Audience</button>
            <h2 className="text-2xl md:text-3xl font-bold">Who Should Apply?</h2>
            <p className="text-sm md:text-base mt-2 text-blue-100">
            No prior design experience is needed—just a passion for creating great experiences!
            </p>
          </div>

          <div className="space-y-4">
            {/* Item 1 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white text-blue-800 flex items-center justify-center font-bold mr-3">
                
              </div>
              <div>
                <p className="font-semibold">
                Women and young professionals eager to build a career in product design.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white text-blue-800 flex items-center justify-center font-bold mr-3">
                
              </div>
              <div>
                <p className="font-semibold">Creatives, problem-solvers, and tech enthusiasts interested in UX/UI.</p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-start">
              <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-white text-blue-800 flex items-center justify-center font-bold mr-3">
                
              </div>
              <div>
                <p className="font-semibold">You…Definitely YOU</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='-mt-5'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#133C8A" fill-opacity="1" d="M0,256L80,261.3C160,267,320,277,480,245.3C640,213,800,139,960,106.7C1120,75,1280,85,1360,90.7L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg></div>
    </div>
  )
}

export default WhoApply