import React from 'react';
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project-2.png';
import project3 from '../assets/images/project-3.png';

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-white bg-[#2f6542]'>
      {/* Container for projects */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          {/* Project title */}
          <p className='text-4xl font-bold text-white'>Projects</p>
          {/* Project description */}
          <p className='py-6'>Some of my recent Projects</p>
        </div>
        {/* Grid of project cards */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Project 1 */}
          <div
            style={{ backgroundImage: `url(${project1})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100'>
              {/* Project details */}
              <span className='text-2xl font-bold text-white tracking-wider'>{/* Project title here */}</span>
              <div className='pt-8 text-center'>
                {/* Project website link */}
                <a href="https://reallyawesomename.github.io/room-for-activities/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Website</button>
                </a>
                {/* Project code link */}
                <a href="https://github.com/ReallyAwesomeName/room-for-activities">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 2 */}
          <div
            style={{ backgroundImage: `url(${project2})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100'>
              {/* Project details */}
              <span className='text-2xl font-bold text-white tracking-wider'>{/* Project title here */}</span>
              <div className='pt-8 text-center'>
                {/* Project website link */}
                <a href="https://thawing-cove-75959.herokuapp.com/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Website</button>
                </a>
                {/* Project code link */}
                <a href="https://github.com/Greivin13/AchievementUnlocked">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
          {/* Project 3 */}
          <div
            style={{ backgroundImage: `url(${project3})` }}
            className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
          >
            <div className='opacity-0 group-hover:opacity-100'>
              {/* Project details */}
              <span className='text-2xl font-bold text-white tracking-wider'>{/* Project title here */}</span>
              <div className='pt-8 text-center'>
                {/* Project website link */}
                <a href="https://cinema-stash-c85de8364f90.herokuapp.com/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Website</button>
                </a>
                {/* Project code link */}
                <a href="https://github.com/domconf/Cinema-Stash">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-black font-bold text-lg'>Code</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
