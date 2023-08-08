import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#2f6542] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/4f738ba0-c50d-4810-a55d-d50b1b600fad' className='flex flex-col max-w-[600px] w-full'>
            <div  className='pb-8'>
                <p className='text-4xl text-white'> Contact Me</p>
            </div>
            <input className='p-2'type='text' placeholder='Name' name='name'></input>
            <input className='my-4 p-2' type='email' placeholder='Email' name='email'></input>
            <textarea className='p-2'name='message' rows='5' placeholder='Message'></textarea>
            <button className='hover:bg-green-950 hover:border-green-950 text-white border-2 px-4 py-3 my-8 mx-auto'>Submit</button>
        </form> 
    </div>
  )
}

export default Contact