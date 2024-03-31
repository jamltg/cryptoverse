import React from 'react'

export default function About() {
  return (
    <div className='bg-black h-auto py-8'>
      <div className='max-w-[1240px] mx-auto'>
        <h1 className='text-4xl lg:text-5xl text-center text-white font-bold mb-6'>About Cryptoverse</h1>
        <div className='md:max-w-[700px] lg:max-w-[850px] mx-auto px-8'>
          <p className='text-white py-2'>Welcome to Cryptoverse – your ultimate gateway to the dynamic world of cryptocurrencies.</p>
          <p className='text-white py-2'> 
            At Cryptoverse, we're passionate about empowering individuals with the knowledge and tools they need to navigate 
            the complexities of the digital asset landscape. Whether you're a seasoned trader or a curious enthusiast, our platform 
            is designed to cater to your needs.
          </p>
          <p className='text-white py-2'>
            Stay ahead of the curve with our real-time updates and expert insights. From the latest market trends to in-depth 
            analysis, we provide you with comprehensive information to make informed decisions in the fast-paced world of crypto 
            trading.
          </p>
          <p className='text-white py-2'>
            But Cryptoverse is more than just a platform for tracking prices and market data. We're committed to fostering 
            a community of learners. Our educational resources cover a wide range of topics, helping you understand the 
            fundamentals of blockchain technology, decentralized finance (DeFi), and much more.
          </p>
        </div>
      </div>
    </div>
  )
}
