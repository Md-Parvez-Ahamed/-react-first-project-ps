import React from 'react'

const HeroSection = () => {
  return (
    <div className='flex flex-col items-center justify-center  h-[90vh] text-white text-center px-4' style={{
      backgroundImage : "url('/src/assets/hero-bg.jpg')",
      backgroundSize : "cover",
      backgroundPosition : 'center',

    }}>
      <h2 className='text-4xl md:text-6xl mb-5 font-bold'>Welcome to My Website</h2>
      <p className='text-lg md:text-xl mb-4'>Your Journey Start Here</p>
      <button className='text-indigo-600 bg-white px-6 py-2 rounded-2xl font-bold cursor-pointer hover:bg-gray-300'>Purchase Products</button>
    </div>
  )
}

export default HeroSection