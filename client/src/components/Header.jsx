import React from 'react'
import {FaOpencart, FaHome, FaStore, FaUserAlt, FaThLarge} from 'react-icons/fa';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <><div className='flex w-full h-14 justify-center fixed'>
    <div className='w-[96vw] h-14 bg-black flex justify-between items-center px-10 rounded-xl'>
      <div className='cursor-pointer w-auto h-auto'>
      <Link to="/">  <h1 className='text-red-500  inline-block text-3xl font-extrabold'>Z</h1><span className='text-white text-xl'>encart</span></Link>
      </div>
     
      <div className='flex text-white md:gap-20'>
    <Link to="/">    <h5 className='flex items-center gap-x-2 cursor-pointer hover:text-red-700 duration-300 ease-in-out'><FaHome/>Home</h5></Link>
    <Link to="/products">  <div>  <h5  className='flex peer items-center gap-x-2 cursor-pointer hover:text-red-700 duration-300 ease-in-out'><FaStore/>Products</h5>
       
      <div className='w-[150px] bg-white hidden hover:flex flex-col  text-black absolute peer-hover:flex'>
      <Link to="/electronics">  <h5 className='px-5 py-3 hover:bg-gray-200 cursor-pointer'>Electronics</h5></Link>
         <h5 className='px-5 py-3 hover:bg-gray-200 cursor-pointer'>Men's Clothings</h5>
         <h5 className='px-5 py-3 hover:bg-gray-200 cursor-pointer'>Women's Clothings</h5>
         <h5 className='px-5 py-3 hover:bg-gray-200 cursor-pointer'>Shoes</h5>
         <h5 className='px-5 py-3 hover:bg-gray-200 cursor-pointer'>Jewellery</h5>
        
      </div>

      </div></Link> 
       <div> <Link to="/catagories"><button  className='flex items-center gap-x-2 peer cursor-pointer hover:text-red-700 duration-300 ease-in-out'><FaThLarge/>Categories</button></Link>
        <div className='absolute  top-10 text-black  hidden peer-hover:flex hover:flex w-[150px]
         flex-col bg-white drop-shadow-lg hover:z-10'>
         <h5 className='px-5 py-3 hover:bg-gray-200 cursor-pointer'>Electronics</h5>
         <h5 className='px-5 py-3 hover:bg-gray-200 cursor-pointer'>Men's Clothings</h5>
         <h5 className='px-5 py-3 hover:bg-gray-200 cursor-pointer'>Women's Clothings</h5>
         <h5 className='px-5 py-3 hover:bg-gray-200 cursor-pointer'>Shoes</h5>
         <h5 className='px-5 py-3 hover:bg-gray-200 cursor-pointer'>Jewellery</h5>
         

          
        </div>
        </div>
        
      </div>
      <div className='flex item-center'>
       <Link to="/cart"> <button className='text-white text-2xl hover:text-red-700 duration-300 ease-in-out'><p className='text-sm '>0</p><FaOpencart /></button></Link>
       <Link to="/user" className='text-white px-10 py-2 text-2xl hover:text-red-700 duration-300 ease-in-out'> <button ><FaUserAlt/></button></Link>

       <Link to="/signup" className='text-white px-5  bg-red-500 py-3 rounded-md font-bold hover:bg-red-700 hover:scale-105 duration-300 ease-in-out'> <button >Login/SignUp</button></Link>
      </div>
    </div>
    </div>
    </>
  )
}

export default Header