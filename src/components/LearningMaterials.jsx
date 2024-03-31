import React from 'react'
import LearningMaterialsList from './LearningMaterialsList'

export default function LearningMaterials() {
  return (
    <div className='bg-black w-full h-auto py-8'>
      <div className='max-w-[1240px] mx-auto px-8'>
        <h1 className='text-white text-5xl font-bold text-center pb-4'>BEST LEARNING MATERIALS</h1>
          <LearningMaterialsList/>
      </div>
    </div>
  )
}
