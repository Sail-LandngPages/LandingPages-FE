import React from 'react'
import Animation from './Animation'

const Stats = () => {
  return (
    <div>
          <div className="bg-white py-12 sm:py-16 -mt-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-20 sm:grid-cols-3 lg:grid-cols-3">
          <div className="flex flex-col items-center relative">
            <Animation target={2800} label="Trained students" />
            {/* Right divider - hidden on mobile */}
            <div className="hidden sm:block absolute  left-23 right-0 top-1/2 h-10 w-px -translate-y-1/2 transform bg-black"></div>
          </div>
          
          <div className="flex flex-col items-center relative">
            <Animation target={80} label="Student employed" unit='%'/>
            {/* Right divider - hidden on mobile */}
            <div className="hidden sm:block absolute left-23 right-0 top-1/2 h-10 w-px -translate-y-1/2 transform bg-black"></div>
          </div>
          
          <div className="flex flex-col items-center">
            <Animation target={3000} label="Community members" />
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Stats