import React from 'react'
import { Calendar, Clock, MapPin, Coins } from "lucide-react"

const ProgramDetails = () => {
  return (
    <div>
         <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Program details</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        <div className="flex flex-col items-center">
          <div className="bg-gray-100 p-3 rounded-full mb-4">
            <Calendar className="h-6 w-6 text-gray-700" />
          </div>
          <h3 className="font-bold mb-1">Start date</h3>
          <p className="text-sm text-gray-600">Will be communicated</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gray-100 p-3 rounded-full mb-4">
            <Clock className="h-6 w-6 text-gray-700" />
          </div>
          <h3 className="font-bold mb-1">Duration</h3>
          <p className="text-sm text-gray-600">2 months</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gray-100 p-3 rounded-full mb-4">
            <MapPin className="h-6 w-6 text-gray-700" />
          </div>
          <h3 className="font-bold mb-1">Location</h3>
          <p className="text-sm text-gray-600">Online</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="bg-gray-100 p-3 rounded-full mb-4">
            <Coins className="h-6 w-6 text-gray-700" />
          </div>
          <h3 className="font-bold mb-1">Cost</h3>
          <p className="text-sm text-gray-600">Fully funded (limited scholarships)</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProgramDetails