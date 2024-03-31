import React from 'react';
import TrendingTable from './TrendingTable';

export default function Trending() {
  return (
    <div className='bg-black w-full h-screen'>
      <div className='max-w-[1240px] mx-auto px-8'>
        <h1 className='text-white text-4xl text-center font-bold tracking-wide py-10'>Trending</h1>
        <TrendingTable/>
      </div>
    </div>
  )
}
