import React, { useState } from 'react';
import { Spin as Hamburger } from 'hamburger-react';
import { Link } from 'react-router-dom';
import {Link as LinkScroll} from 'react-scroll';

export default function Header() {
  const [isOpen, setOpen] = useState(false)

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <div className='bg-black text-white'>
      <div className='max-w-[1240px] mx-auto flex justify-between items-center px-8 h-20'>
        <Link to="/cryptoverse">
          <div>
            <h1 className='text-xl lg:text-3xl font-bold'>Cryptoverse</h1>
          </div>
        </Link>
        <ul className='hidden lg:flex space-x-3'>
          <Link to="/cryptoverse/about">
            <li className='p-4'>About</li>
          </Link>
          <Link to="/cryptoverse/market">
            <li className='p-4'>Market</li>
          </Link>
          <Link to="/cryptoverse/learn-crypto">
            <li className='p-4'>Learn Crypto</li>
          </Link>
        </ul>
        <div className='lg:hidden'>
          <Hamburger toggled={isOpen} toggle={toggleMenu} size={20} color="white"/>
        </div>
      </div>
      {isOpen && (
        <div className='bg-black w-full h-screen'>
          <div>
            <ul className='text-white'>
              <div className='border-b-2 border-white'>
                <Link to="/cryptoverse/about" onClick={closeMenu}>
                  <li className='flex justify-end p-4 mr-8'>About</li>
                </Link>
              </div>
              <div className='border-b-2 border-white'>
                <Link to="/cryptoverse/market" onClick={closeMenu}>
                  <li className='flex justify-end p-4 mr-8'>Market</li>
                </Link>
              </div>
              <div className='border-b-2 border-white'>
                <Link to="/cryptoverse/learn-crypto" onClick={closeMenu}>
                  <li className='flex justify-end p-4 mr-8'>Learn Crypto</li>
                </Link>
              </div>
            </ul>
          </div>
        </div>
      )}
    </div>
  )
}
