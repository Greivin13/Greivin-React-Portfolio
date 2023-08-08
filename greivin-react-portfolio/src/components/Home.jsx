import React from 'react'
import {HiArrowNarrowRight}  from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#2f6542]'>

        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <h1 className='text-4xl sm:text-7xl font-bold text-white'>Greivin Arias</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-white'>Full Stack Developer</h2>
        <div>
            <button className='text-black border-2 px-6 py-2 my-2 flex items-center hover:bg-[#c6aa58]'>Projects<HiArrowNarrowRight/></button>
        </div>
        </div>

    </div>
  )
}

export default Home