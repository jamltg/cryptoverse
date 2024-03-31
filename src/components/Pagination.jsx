import React from 'react';

const Pagination = ({totalPosts,postsPerPage, setCurrentPage}) => {
  let pages = [];
  for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++){
    pages.push(i)
  }
  return (
    <div className='text-center space-x-6 py-6 text-xl'>
      {
        pages.map((page,index)=>{
          return(
            <button 
              className='text-white border-white' 
              key={index}
              onClick={()=>setCurrentPage(page)}
            >
              {page}
            </button>
          );
        })
      }
    </div>
  )
}

export default Pagination