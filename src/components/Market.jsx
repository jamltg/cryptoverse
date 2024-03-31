import React, { useEffect, useState } from 'react'
import Coin from './Coin';
import axios from 'axios';
import Pagination from './Pagination';

export default function Market() {
  const [market,setMarket] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(13);

  useEffect(() => {
    async function fetchData(){
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false&locale=en');
      setMarket(response.data);
    }
    fetchData();
  },[]);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = market.slice(firstPostIndex,lastPostIndex);

  return (
    <div className='bg-black py-8 px-4' id="market">
      <div className='max-w-[1240px] mx-auto'>
        <h1 className='text-white text-4xl font-bold text-center tracking-wider pb-10'>Markets</h1>
        <Coin coin={currentPosts}/>
        <Pagination totalPosts={market.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage}/>
      </div>
    </div>
  )
}
