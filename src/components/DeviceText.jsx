import React from 'react'
import { FaCircleCheck } from "react-icons/fa6";

export default function DeviceText() {
  return (
    <div className='flex flex-col justify-center py-4'>
      <h1 className='text-5xl py-4 text-white text-center font-bold md:max-w-[700px] md:mx-auto lg:max-w-[800px]'>Crpytoverse is The Newest Crypto Trading Platform</h1>
      <h2 className='text-[rgb(201,207,221)] text-2xl font-medium pt-2 pb-6 md:max-w-[700px] md:mx-auto lg:max-w-[800px] text-center'>Buy any Cryptocurrency Currently in the Market</h2>
      <div>
        <div className='flex items-center justify-start w-full md:max-w-[600px] md:mx-auto lg:max-w-[500px] px-8 gap-5 py-2'>
          <FaCircleCheck color="white" size={18}/>
          <h1 className='text-white'>Trade with 20+ fiat currencies</h1>
        </div>
        <div className='flex items-center justify-start md:max-w-[600px] md:mx-auto lg:max-w-[500px] px-8 gap-5 py-2'>
          <FaCircleCheck color="white" size={18}/>
          <h1 className='text-white'>Leader in regulatory compliance and security certifications</h1>
        </div>
        <div className='flex items-center justify-start w-full md:max-w-[600px] md:mx-auto lg:max-w-[500px] px-8 gap-5 py-2'>
          <FaCircleCheck color="white" size={18}/>
          <h1 className='text-white'>Trusted by over 80 million users worldwide</h1>
        </div>
      </div>
      <div className='text-center mt-4 px-8 md:max-w-[700px] md:mx-auto lg:max-w-[500px]'>
        <button className='text-white border border-white px-4 py-2 rounded-lg font-medium tracking-wider hover:bg-white hover:text-black'>TRADE NOW</button>
      </div>
    </div>
  )
}
