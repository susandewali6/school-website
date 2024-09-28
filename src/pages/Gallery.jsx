import React from 'react'
import imgt from '../assets/imgtop.jpg'
import img from '../assets/img.jpg'


export default function Gallery() {
  return (
    <div className=' bg-gray-100'>
      <div className='relative w-[100vw] h-[30vh] bg-fixed bg-center bg-cover bg-no-repeat' style={{backgroundImage:`url(${imgt})`}}>
        {/* //over lay */}
<div className=' absolute inset-0 opacity-60 bg-black'> 

</div>
<div className=' relative md:px-0 px-4 z-10 flex flex-col items-center justify-center h-full  gap-10 '>
<p  data-aos="fade-up"
     data-aos-duration="3000" className=' text-gray-100 max-w-5xl text-9xl font-serif'>Gallery </p>

</div>
      </div>
      <div>
        {imgs.map((img,index) => (
            <div className=' w-10/12 flex grid-cols-4 justify-center items-center'>
                <img src={img.img}/>
                
                
            </div>
        ))}
      </div>
    </div>
    
  )
}
const imgs =[{
    img: img
}]
