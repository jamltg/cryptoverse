import React from 'react'
import DeviceMockup from './DeviceMockup'
import DeviceText from './DeviceText'

export default function Platform() {
  return (
    <div className='bg-black py-8 w-full h-auto'>
      <div className='max-w-[1240px] mx-auto px-8'>
        <div className='flex flex-col lg:flex-row-reverse'>
          <DeviceMockup/>
          <DeviceText/>
        </div>
      </div>
    </div>
  )
}
