import React from 'react'

const Community = () => {
  return (
    <div>
         <div className="bg-blue-800 text-white p-8 rounded-lg max-w-2xl">
      <div className="mb-2">
        <span className="bg-yellow-500 text-xs font-semibold px-2 py-1 rounded text-black">Featured</span>
      </div>
      <h2 className="text-2xl font-bold mb-3">Ready to Join Our Community?</h2>
      <p className="text-sm mb-6 text-blue-100">
        Join the best community around, where a friendly team is ready to help. Get the best tools and support needed
        for the application form. We'll ensure you're equipped with more than you actually need.
      </p>
      <button className="bg-white text-blue-800 px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-50 transition-colors">
        APPLY NOW
      </button>
    </div>
    </div>
  )
}

export default Community