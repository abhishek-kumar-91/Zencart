import React, { useState } from 'react'
import b1 from '../assets/images/addidas.png'
import b2 from '../assets/images/h.png'
import b3 from '../assets/images/handm.png'
import b4 from '../assets/images/infinity.png'
import b5 from '../assets/images/levis.png'
import b6 from '../assets/images/nike.png'
import b7 from '../assets/images/north.png'
import b8 from '../assets/images/shoes.png'
import b9 from '../assets/images/supreme.png'
import b10 from '../assets/images/tiny.png'

function Brand() {
    const listBrand = [b1, b2, b3, b4, b5, b6, b7, b8, b9, b10];


  return (
    <>
    <div className='flex w-full h-32 justify-center items-center  relative'>
    <div className='w-[96vw] h-32 absolute flex items-center gap-5 overflow-x-auto scrollbar-hide'>
        {
            listBrand.map((brand, brandIndex) =>{
                return <img src={listBrand[brandIndex]} className=' rounded-md  w-36' key={brandIndex}/>
            })
        } 
        
    </div>
    </div>
    </>
  )
}

export default Brand