import React from 'react';

export default function BackendLearningCard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 left-10 w-16 h-16 bg-blue-400 rounded-full opacity-70"></div>
      <div className="absolute top-20 left-20 w-8 h-8 grid grid-cols-4 gap-1">
        {[...Array(16)].map((_, i) => (
          <div key={i} className="w-1 h-1 bg-gray-400 rounded-sm"></div>
        ))}
      </div>
      <div className="absolute top-5 right-20 w-20 h-1 bg-teal-400 rounded-full transform rotate-12"></div>
      
      {/* Main card */}
      <div className="max-w-4xl mx-auto">
        <div className="bg-slate-800 rounded-2xl p-12 relative overflow-hidden shadow-2xl">
          {/* Decorative rings at top */}
          <div className="absolute top-8 left-8 flex space-x-2">
            <div className="w-4 h-4 border-2 border-white rounded-full"></div>
            <div className="w-4 h-4 border-2 border-white rounded-full"></div>
            <div className="w-4 h-4 border-2 border-white rounded-full"></div>
          </div>
          
          {/* Orange logo/icon in bottom right */}
          <div className="absolute bottom-8 right-8 w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center">
            <div className="grid grid-cols-3 gap-1">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="w-1.5 h-1.5 bg-white rounded-sm"></div>
              ))}
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            {/* Left side - Main heading */}
            <div className="flex-1">
              <h1 className="text-white text-5xl font-bold leading-tight">
                Why<br />
                Learn<br />
                Backend?
              </h1>
            </div>
            
            {/* Right side - Content */}
            <div className="flex-1 ml-16 relative">
              {/* Decorative arrow */}
              <div className="absolute -left-20 top-0">
                <svg width="120" height="80" viewBox="0 0 120 80" className="text-white">
                  <path 
                    d="M10 40 Q40 10, 70 40 T110 40" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none"
                    strokeDasharray="none"
                  />
                  <path 
                    d="M105 35 L110 40 L105 45" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    fill="none"
                  />
                </svg>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h2 className="text-white text-xl font-semibold mb-2">
                    Tired of "fronting" — ready to dig deeper?
                  </h2>
                </div>
                
                <div>
                  <p className="text-gray-300 text-lg">
                    Want to build apps that actually work?
                  </p>
                </div>
                
                <div>
                  <p className="text-gray-300 text-lg">
                    Dream of handling real traffic, real users, and real impact?
                  </p>
                </div>
              </div>
              
              {/* Decorative dotted circle */}
              <div className="absolute -bottom-8 -left-8 w-16 h-16 border-4 border-dotted border-orange-500 rounded-full opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}