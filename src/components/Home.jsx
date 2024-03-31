import React from 'react';
import Hero from './Hero';
import Trending from './Trending';
import Market from './Market';
import HomeInfo from './HomeInfo';
import NFT from './NFT';
import Platform from './Platform';
import FAQAccordion from './FAQAccordion';

export default function Home() {
  return (
    <div>
      <Hero/>
      <HomeInfo/>
      <Platform/>
      <Market/>
      <NFT/>
      <Trending/>
      <FAQAccordion/>
    </div>
  )
}
