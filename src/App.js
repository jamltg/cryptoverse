import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./components/Home";
import Header from './components/Header';
import Footer from './components/Footer';
import Cryptoverse from './components/Cryptoverse';
import About from './components/About';
import NFT from './components/NFT';
import LearningMaterials from './components/LearningMaterials';
import FAQAccordion from './components/FAQAccordion';
import Market from './components/Market';
import Trending from './components/Trending';

function App() {
  const router = createBrowserRouter([
    {
      path:"/cryptoverse",
      element: (
        <>
          <Header/>
          <Home/>
          <Footer/>
        </>
      )
    },
    {
      path:"/cryptoverse/learn-crypto",
      element:(
        <>
          <Header/>
          <Cryptoverse/>
          <LearningMaterials/>
          <NFT/>
          <FAQAccordion/>
          <Footer/>
        </>
      )
    },
    {
      path:"/cryptoverse/about",
      element:(
        <>
          <Header/>
          <About/>
          <FAQAccordion/>
          <Footer/>
        </>
      )
    },
    {
      path:"/cryptoverse/market",
      element:(
        <>
          <Header/>
          <Market/>
          <Trending/>
          <FAQAccordion/>
          <Footer/>
        </>
      )
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
