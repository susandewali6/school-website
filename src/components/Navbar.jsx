import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.jpg'
import { BsThreeDotsVertical } from "react-icons/bs";
import { ImCross } from "react-icons/im";

export default function Navbar() {
  const [name, setName] = useState(false)
  const xyz = () => {
    setName(!name)
  }
  return (
    <div className=' flex  justify-center  '>
      <div className=' md:w-10/12 bg-white '>
      <div className=' flex justify-between'>
        <div className=' w-5/12 '>
          <img className=' h-9 rounded-full' src={logo} alt="" />
        </div>


        <div className=' w-10/12 flex justify-between '>

          <div className=' hidden  md:flex  w-5/12  gap-5'>
            <Link to="/">Home</Link>
            <Link to="/services">Services</Link>
            <Link to={"/aboutus"}>Aboutus</Link>
            <Link to={"/contact"}> Contactus</Link>



          </div>

          <div className='  md:hidden flex' onClick={xyz}>
            {
              name ? <p><ImCross/></p> : <p> <BsThreeDotsVertical/></p>
            }

          </div>
          {name &&
            <div className=' md:hidden flex flex-col gap-9   '>
              <Link to="/" onClick={xyz}>Home</Link>
              <Link to="/services" onClick={xyz}>Services</Link>
              <Link to={"/aboutus"} onClick={xyz}>Aboutus</Link>
              <Link to={"/contact"} onclick={xyz}>Contact us</Link>
            </div>
          }
        </div>
        </div>
      </div>
    </div>
  )
}
