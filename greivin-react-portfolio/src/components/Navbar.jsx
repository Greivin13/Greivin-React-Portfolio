import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav (!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0c371c]  text-white'>
        
            <ul className='hidden md:flex'>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Contact Me</li>
            </ul>

        <div onClick={handleClick} className='md:hidden z-10'>
          {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        <ul  className={!nav ? 'hidden' : 'absolute top-0 left-0  w-full h-screen bg-[#0c371c] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Projects</li>
        <li className='py-6 text-4xl'>Contact Me</li>
        </ul>

        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-[#7777]'>
                    <a className='flex justify-between items-center w-full text-white'
                    href='https://github.com/Greivin13'>
                        Github <FaGithub size={30}  />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-200 bg-[#7777]'>
                    <a className='flex justify-between items-center w-full text-white'
                    href='/'>
                        Linkedin <FaLinkedin size={30}  />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}
 export default Navbar