import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from "./components/Home";
import Header from './components/Header';
import Footer from './components/Footer';
import CoinDetail from './components/CoinDetail';
import Cryptoverse from './components/Cryptoverse';
import About from './components/About';
import NFT from './components/NFT';
import LearningMaterials from './components/LearningMaterials';
import FAQAccordion from './components/FAQAccordion';

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
      path:"/coin/:id",
      element:(
        <>
          <Header/>
          <CoinDetail/>
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
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
