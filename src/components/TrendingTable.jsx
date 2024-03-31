import React, { useEffect, useState } from 'react'

export default function TrendingTable() {
  const [trendingData, setTrendingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/search/trending'
        );
        const data = await response.json();
        setTrendingData(data.coins);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="overflow-x-auto">
        <table className="w-[900px] table-auto mx-auto">
          <thead className='text-white'>
            <tr>
              <th className="w-1/3 text-xl lg:text-2xl">Coin</th>
              <th className="w-1/3 text-xl lg:text-2xl">Price</th>
              <th className="w-1/3 text-xl lg:text-2xl">Market Cap</th>
            </tr>
          </thead>
          <tbody className='overflow-y-scroll h-40'>
            {trendingData.slice(0,8).map((coin)=>(
              <tr key={coin.item.id}>
                <td className='flex space-x-3 items-center py-2'>
                  <img src={`${coin.item.small}`} alt="crypto"/>
                  <h1 className='text-white'>{coin.item.name}</h1>
                  <p className='text-[rgb(120,151,173)]'>({coin.item.symbol})</p>
                </td>
                <td className='text-center'> 
                  <h1 className='text-white'>${coin.item.data.price.toFixed(5)}</h1>
                </td>
                <td className='text-center'>
                  <h1 className='text-white'>{coin.item.data.market_cap}</h1>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
