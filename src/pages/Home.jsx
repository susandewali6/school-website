import React from 'react'
import HomeSlider from '../components/HomeSlider'
import SagVag from '../components/SagVag'
import Button from '../components/Button'
import New from '../components/New'


export default function Home() {
  return (
    <div className=' flex flex-col gap-9 overflow-x-hidden'>
      <HomeSlider/>
      <SagVag/>
      <Button/>
      <New />
    
      
    </div>
  )
}
