import React from 'react'
import bg from '../assets/images/banner-bg.png'
import Brand from '../components/Brand'
import { FaSearch} from 'react-icons/fa'

function Home() {
  return (
    <>
   
    <div className='w-full h-[100vh] '>
      <img src={bg} className='h-[70vh] w-full bg-cover bg-center'/>
      <div className='flex w-full justify-center relative bottom-40'>
        <input type='text' placeholder='Search Anything.......' className='h-14 text-gray-700  w-[500px] rounded-l-lg outline-none border-none px-2 font-medium'/>
        <button className='text-white   bg-red-500 rounded-r-lg px-12 hover:bg-red-700 hover:scale-105 duration-300 ease-in-out'><FaSearch/></button>
      </div>
      <Brand />
    </div>
    </>
  )
}

export default Home