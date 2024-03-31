import React from 'react';
import nasa from '../images/nasa.jpg';

export default function CryptoVerseHero() {
  return (
      <div className='absolute inset-0 -z-10'>
        <div 
          className='absolute inset-0 w-full h-screen bg-black' 
          style={{
            backgroundImage:`url(${nasa})`, 
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center'
          }}
        />
        <div className='absolute inset-0 bg-black opacity-60'></div>
        <div className='relative flex items-center justify-center h-screen'>
          <div className='px-8'>
            <h1 className='text-white uppercase text-4xl lg:text-6xl text-center font-bold'>Ready to dive deeper into the world of cryptocurrency? </h1> 
            <p className='text-white text-center mt-6'>Explore the best online learning platforms curated just for you.</p>
          </div>
        </div>
      </div>

  )
}


