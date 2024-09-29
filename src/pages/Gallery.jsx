import React from 'react'
import imgt from '../assets/imgtop.jpg'
import anni from '../assets/anni.jpg'
import anni1 from '../assets/anni1.jpg'
import anni2 from '../assets/anni2.jpg'


export default function Gallery() {
  return (
    <div className=' bg-gray-100 pt-32 flex flex-col gap-10'>
      <div className='relative md:w-[100vw] h-[30vh] bg-fixed bg-center bg-cover bg-no-repeat' style={{ backgroundImage: `url(${imgt})` }}>
        {/* //over lay */}
        <div className=' absolute inset-0 opacity-60 bg-black'>

        </div>
        <div className=' relative md:px-0 px-4 z-10 flex flex-col items-center justify-center h-full  gap-10 '>
          <p data-aos="fade-up"
            data-aos-duration="3000" className=' text-gray-100 max-w-5xl text-4xl font-serif'>Gallery </p>

        </div>
      </div>
      <div className='' >
        <div className=' grid md:grid-cols-2 justify-center items-center gap-10 px-10 '>
          {imgs.map((img, index) => (<div className=' flex flex-col justify-center items-center '>
            <img src={img.img} />
            <p>{img.name}</p>
          </div>

          ))}
        </div>
      </div>
    </div>
    

  )
}
const imgs = [
{
  img: anni1,
  name: "8th anniversary"
},
{
  img: anni2,
  name: "8th anniversary"
},
{
  img: anni,
  name: "8th anniversary"
}

]
