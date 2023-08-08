import React from 'react'
import me from '../assets/images/me.jpg'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#2f6542] text-white'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-5xl'>About Me</p>
                    <img src={me} alt='Greivin Arias' className='mt-4 rounded-full w-60 h-60' />
                    </div>
                <div></div>
                </div>
                <div className='max-w-[1000px w-full grid sm:grid-cols-2 gap-8 px-4'> 
                 <div className='sm:text-right text-4xl font bold'>
                    <p>My name is Greivin Arias, currently a student 
                    of the Rutgers bootcamp.
                    </p>
                 </div>
                 <div>
                    <p>My goal is to graduate and accomplish many things with the set of skills learned throughout this course. I am excited to apply these skills to create innovative solutions and contribute to meaningful projects in the field of technology.
                    </p>
                </div>
          </div>
        </div>
    </div>
  )
}

export default About