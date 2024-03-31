import React from 'react';
import NFTImage from './NFTImage';

export default function NFT() {
  return (
    <div className='bg-black w-full h-auto py-8'>
      <h1 className='text-center text-4xl font-bold text-white pb-6'>NFT</h1>
      <div className='max-w-[1240px] mx-auto'>
        <div className='px-8'>
          <p className='text-white text-center pt-4 pb-8 md:max-w-[700px] md:mx-auto lg:max-w-[800px] lg:text-justify'>
            Investing in NFTs is an invitation to own a piece of the digital revolution, where every token 
            is a unique expression of creativity and innovation. With NFTs, you're not just buying art; you're 
            investing in a new era of ownership, where scarcity meets endless possibilities. Join the journey where 
            digital assets become cultural landmarks and collectors shape the future of value creation. Dive into 
            the world of NFTs and discover the allure of owning a piece of tomorrow's digital history.
          </p>
        </div>
        <NFTImage/>
      </div>
    </div>
  )
}
