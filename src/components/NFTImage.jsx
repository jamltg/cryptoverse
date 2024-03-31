import React from 'react';
import nft1 from '../images/nft1.jpg';
import nft2 from '../images/nft2.png';

export default function NFTImage() {
  return (
    <div className='flex flex-col space-y-5 lg:flex-row px-6 lg:space-y-0 lg:space-x-5'>
      <div class="relative group w-full">
        <img src={nft1} alt="try" class="object-cover w-full h-full group-hover:opacity-60 rounded-lg"/>
          <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-70 flex flex-col items-center justify-center">
            <div className='px-6'>
              <h1 className='text-white text-4xl uppercase font-bold text-center mb-4'>Bored Ape Yacht Club</h1>
              <p className='text-white'>
                Bored Ape Yacht Club is a vibrant community and collection of unique, hand-drawn pixel art NFTs featuring 
                whimsical and distinctive ape characters. Each Bored Ape is a symbol of membership in an exclusive digital club, 
                fostering a tight-knit community of enthusiasts and collectors exploring the boundaries of digital ownership and 
                creativity.
              </p>
            </div>
          </div>
      </div>
      <div class="relative group w-full">
        <img src={nft2} alt="try" class="object-cover w-full h-full group-hover:opacity-60 rounded-lg"/>
          <div class="absolute inset-0 bg-black opacity-0 group-hover:opacity-60 flex items-center justify-center">
            <div className='px-6'>
              <h1 className='text-white text-4xl uppercase font-bold text-center mb-4'>CryptoPunks</h1>
              <p className='text-white'>
                CryptoPunks are the pioneering NFTs, consisting of 10,000 unique 24x24 pixel art characters on Ethereum. 
                Each Punk is a digital collectible, embodying internet culture with their retro-futuristic style. Highly 
                sought-after for their scarcity, CryptoPunks represent the essence of decentralized digital ownership.
              </p>
            </div>
          </div>
      </div>
    </div>
  )
}
