import React from 'react'
import Animation from './Animation'

const Stats = () => {
  return (
    <div>
          <div className="bg-white py-12 sm:py-16 -mt-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 gap-x-10 sm:grid-cols-3 lg:grid-cols-3">
          <Animation target={2800} label="Trained students" /> 
          <Animation target={80} label="Student employed" /> 
          <Animation target={3000} label="Community members" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Stats