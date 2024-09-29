import { useState } from "react"
import img from "../assets/image.jpg"
import { FaArrowAltCircleLeft } from "react-icons/fa";
import susan from '../assets/susan.jpg'
import suraj from '../assets/suraj.jpg'
import sushmita from '../assets/sushmita.jpg'
import subash from '../assets/subash.jpg'
import shanta from '../assets/shanta.jpg'
import sitaram from '../assets/sitaram.jpg'


export default function Ourteam() {
  const [none, setNone] = useState(false)
  const name = () => {
    setNone(!none)
  }
  return (
    

          <div className="  grid  md:grid-cols-3 p-10 justify-center items-center gap-10 rounded-full grooup pt-24 ">
            {items.map((item, index) => (
              <div className=" hover:bg-white duration-1000  ">
                <img src={item.img} alt="" />
                <div className="flex flex-col items-center ">
                <p>{item.Name}</p>
                <p>{item.Num}</p>
                <p className=" text-blue-700 text-2xl bg-yellow-200 px-6 rounded-md">{item.Address}</p>
                </div>
              </div>
            ))

            }

          </div>
         
          )}

const items = [
  {
    img: sitaram,
    Name: "Sitaram dewali",
    Num: 9813967263,
    Address: "Pastor"
  },
  {
    img: shanta,
    Name: "Shanta dewali",
    Num: 9828559757,
    Address: "pastor"
  },
  {
    img: subash,
    Name: "Subash tamang",
    Num: 9818895421,
    Address: "Leader"
  },
  {
    img: suraj,
    Name: "Suraj dewali",
    Num: 9803895958,
    Address: "Youth leader"
  },
  {
    img: susan,
    Name: "Susan dewali",
    Num: 9818895421,
    Address: "Member"
  },
  {
    img: sushmita,
    Name: "Sushmita dewali",
    Num: 9818895421,
    Address: "Member"
  },
]