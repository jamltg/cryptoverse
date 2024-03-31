import React from 'react';
import { currencyFormat } from '../utils';
import { TrendingDown, TrendingUp } from '../icons/icons';

export default function Coin({coin}) {
  return (
    <div>
      {coin.map((coin,index)=>{
        return (
          <div className='grid grid-cols-3 sm:grid-cols-4 lg:px-4 py-4
          rounded-lg border-gray-200 border-b hover:bg-gray-200 hover:bg-opacity-30'>
            <div className='flex items-center gap-1 w-full'>
              <img className='w-8' src={coin.image} alt="coin name"/>
              <p className='text-white'>{coin.name}</p>
              <span className='text-white text-xs uppercase'>({coin.symbol})</span>
            </div>
            <span className='text-white w-full text-center'>{currencyFormat(coin.current_price)}</span>
            <span className={`flex gap-1 ${coin.price_change_percentage_24h < 0 ? 'text-red-400' : 'text-green-400'}`}>
              {coin.price_change_percentage_24h < 0 ? <TrendingDown/> : <TrendingUp/>}
              {coin.price_change_percentage_24h}
            </span>
            <div className='hidden sm:block'>
              <p className='font-semibold text-white'>Market Cap</p>
              <span className='text-white'>{currencyFormat(coin.market_cap)}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}
