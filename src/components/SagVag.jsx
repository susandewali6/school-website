import { useState } from "react"
import img from "../assets/image.jpg"
import { FaArrowAltCircleLeft } from "react-icons/fa";


export default function SagVag() {
  const [none, setNone] = useState(false)
  const name = () => {
    setNone(!none)
  }
  return (
    <div className=" flex flex-col gap-7">
      <div className=" text-center items-center" onClick={name}>
        {
          none ? <p className="flex justify-center items-center "><FaArrowAltCircleLeft /></p> :
            <div className=" flex justify-center items-center">
              <p className=' bg-purple-800 w-mx'>
                Active member
              </p>
            </div>
        }


      </div>
      <div className=" flex justify-center items-center">
        {none &&
        <div className=" flex justify-center">
          <div className=" flex flex-col w-10/12 ">

          <div className="  grid  md:grid-cols-3 p-10 justify-center items-center gap-10 rounded-full grooup ">
            {items.map((item, index) => (
              <div className="bg-yellow-200 hover:bg-white duration-1000 hover:rotate-[360deg] ">
                <img src={item.img} alt="" />
                <div className="flex flex-col items-center ">
                <p>{item.Name}</p>
                <p>{item.Num}</p>
                <p>{item.Address}</p>
                </div>
              </div>
            ))

            }

          </div>
          </div>
          </div>

        }
      </div>
    </div>
  )
}

const items = [
  {
    img: img,
    Name: "Susan dewali",
    Num: 9818895421,
    Address: "Satungal"
  },
  {
    img: img,
    Name: "Susan dewali",
    Num: 9818895421,
    Address: "Satungal"
  },
  {
    img: img,
    Name: "Susan dewali",
    Num: 9818895421,
    Address: "Satungal"
  },
  {
    img: img,
    Name: "Susan dewali",
    Num: 9818895421,
    Address: "Satungal"
  },
  {
    img: img,
    Name: "Susan dewali",
    Num: 9818895421,
    Address: "Satungal"
  },
  {
    img: img,
    Name: "Susan dewali",
    Num: 9818895421,
    Address: "Satungal"
  },
]