import React from 'react'

const StarsRating = () => {
  return (
    <div className="flex items-center space-x-1">
    {/* 3 Fully Filled Stars */}
    <span className="text-yellow-500 text-xl">★</span>
    <span className="text-yellow-500 text-xl">★</span>
    <span className="text-yellow-500 text-xl">★</span>
  
    {/* 1 Quarter-Filled Star */}
    <span className="relative">
      <span className="text-gray-300 text-xl">★</span> 
      <span className="absolute top-0 left-0 text-yellow-500 overflow-hidden w-[45%] text-xl">★</span> 
    </span>
  
    {/* 1 Empty Star */}
    <span className="text-gray-300 text-xl">★</span>
  </div>
  
  )
}

export default StarsRating
