import React from 'react';
import udemy from '../images/udemy.png';
import youtube from '../images/youtube.png'

export default function LearningMaterialsList() {
  return (
    <div className='py-6'>
      <div className='flex flex-col'>
        <div className='flex flex-col items-center lg:flex-row lg:gap-6 py-6'>
          <div className='w-[50%] flex justify-center'>
            <img src={udemy} alt="udemy"/>
          </div>
          <div className='text-white md:max-w-[700px] lg:w-[50%]'>
            <p className='py-2'>
              Udemy offers a diverse range of cryptocurrency courses taught by experts, providing learners 
              with comprehensive and up-to-date knowledge on blockchain technology and trading strategies.
            </p>
            <p className='py-2'>
              It also has a flexible learning format that enables students to study at their own pace, fitting their education 
              around busy schedules without feeling rushed.
            </p>
            <p className='py-2'>
              Lastly, with regular updates and new course offerings, Udemy ensures that learners stay informed about the latest 
              trends and developments in cryptocurrency.
            </p>
          </div>
        </div>
        <div className='flex flex-col items-center lg:flex-row lg:gap-6 py-6'>
          <div className='w-[50%] flex justify-center'>
            <img src={youtube} alt="youtube"/>
          </div>
          <div className='text-white md:max-w-[700px] lg:w-[50%]'>
            <p className='py-2'>
              YouTube serves as an excellent platform for learning about cryptocurrency due to its vast array of educational 
              content, ranging from beginner tutorials to in-depth analyses provided by experienced traders and blockchain experts.
            </p>
            <p className='py-2'>
              However, it's crucial to emphasize that while YouTube can offer valuable insights, conducting one's own research 
              is imperative in the cryptocurrency space, where misinformation and scams are prevalent. By verifying information 
              from multiple sources and staying updated on market trends, individuals can make more informed decisions.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
