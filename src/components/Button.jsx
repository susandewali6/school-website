import React, { useState } from 'react'

export default function Button() {
    const [name, setName] = useState(false)
    const abc = () => {
        setName(!name)
    }
    return (
        <div>

        <div onClick={abc}>
            {
                name ? <p>back</p> :
                <div className=' flex justify-center items-center'>
                    <p className='bg-yellow-200 px-3 py-2 rounded-md hover:bg-black hover:text-white'>touch</p>
                    </div>
            }
        </div>
        {name &&

            <div>
                hehehe
            </div>

        }
        </div>

        
        


    
  )
}
