import React from 'react'
import { Form } from 'react-router-dom'

export default function Contact() {
  return (
    <div className=' flex justify-center items-center'>
      <div className=' w-10/12 flex flex-col justify-center items-center gap-4'>
        <h1 className=' flex-1'>
            contact us
        </h1>
            <p className=' flex-1 '>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione voluptates molestiae aperiam exercitationem nulla nisi consequuntur tempore nobis accusantium sed placeat illo cupiditate, quia in nostrum laboriosam ipsum eius eligendi?
            </p>
            <div className=' flex justify-between items-center'>
                <div className='w-5/12 flex flex-col '>
                    <div className=''>
                        <form>
                            <div>
                                <p>First name </p>
                                <input className=' w-full border rounded-md ' type="text"
                                placeholder='Enter name' />
                            </div>
                        </form>
                    </div>
                </div>
                <div className='w-5/12 flex flex-col justify-center items-center'>
                    right
                </div>
            </div>
        
      </div>
    </div>

  )
}
