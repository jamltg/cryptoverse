import React from 'react';
import earth from '../images/earth.jpg';
import { Link } from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';

export default function Hero() {
  return (
    <div className='relative w-full h-screen'>
      <div className='absolute inset-0'>
        <div 
          className='absolute inset-0 w-full h-full bg-black' 
          style={{
            backgroundImage:`url(${earth})`, 
            backgroundSize:'cover',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center'
          }}
        />
        <div className='absolute inset-0 bg-black opacity-40'></div>
      </div>
      <div 
        className='absolute h-screen w-full px-8 flex flex-col 
        justify-center items-center text-white text-center'
      >
        <h1 className='text-5xl font-bold mb-8 tracking-wide leading-snug lg:text-6xl'>Explore Prices Beyond the Moon</h1>
        <p className='tracking-wide font-medium lg:text-xl'>Embark on a Lunar Expedition Through Cryptocurrency Prices.</p>
        <div className='flex mt-6 space-x-6'>
          <LinkScroll to="market" spy={true} smooth={true} offset={50} duration={500} className='cursor-pointer'>
            <button className='px-4 py-2 rounded-xl border border-white hover:bg-white hover:text-black'>
              <h1>
                Explore Now
              </h1>
            </button>
          </LinkScroll>
          <Link to="/cryptoverse/learn-crypto">
            <button className='px-4 py-2 rounded-xl border border-white hover:bg-white hover:text-black'>
              <h1>
                Cryptoverse
              </h1>
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}