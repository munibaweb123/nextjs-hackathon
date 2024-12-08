import Image from 'next/image'
import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaQrcode, FaSkype, FaTwitter } from 'react-icons/fa';

const footer = () => {
  return (
    <div className='bg-[#2A254B] min-h-[350px] text-white w-full px-4'>
        <div className='max-w-6xl mx-auto'>
        <div className='p-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-evenly items-start md:items-center gap-8 py-10 border-b-2'>
        <ul className='space-y-4'>
          <li className='text-2xl md:text-2xl '>Avion</li>
          <li className='text-xl md:text-xl'>21 New York Street</li>
          <li className='text-lg md:text-xl'>New York City</li>
          <li className='text-lg md:text-xl'>United States of America</li>
          <li className='text-lg md:text-xl'>432 34</li>

          
        </ul>
        <ul className='space-y-4'>
          <li className='text-xl md:text-2xl'>Social links</li>
          <li className='flex items-center gap-x-2'><FaLinkedin size={20}/> <FaFacebook size={20}/> <FaInstagram size={20}/> <FaSkype size={20}/> <FaTwitter/> <FaPinterest/></li>
        </ul>
        <ul className='space-y-4'>
          <li className='text-xl md:text-2xl'>Menu</li>
          <li className='text-lg md:text-xl'>New Arrivals</li>
          <li className='text-lg md:text-xl'>Best Sellers</li>
          <li className='text-lg md:text-xl'>Recently viewed</li>
          <li className='text-lg md:text-xl'>Popular this week</li>
          <li className='text-lg md:text-xl'>All products</li>
        </ul>
        <ul className='space-y-4'>
          <li className='text-xl md:text-2xl'>Categories</li>
          <li className='text-lg md:text-xl'>Crockery</li>
          <li className='text-lg md:text-xl'>Furniture</li>
          <li className='text-lg md:text-xl'>Homeware</li>
          <li className='text-lg md:text-xl'>Plant pots</li>
          <li className='text-lg md:text-xl'>Chairs</li>
          <li className='text-lg md:text-xl'>Crockery</li>
        </ul>

        <ul className='space-y-4'>
          <li className='text-xl md:text-2xl'>Our company</li>
          <li className='text-lg md:text-xl'>About us</li>
          <li className='text-lg md:text-xl'>Vacancies</li>
          <li className='text-lg md:text-xl'>Contact us</li>
          <li className='text-lg md:text-xl'>Privacy</li>
          <li className='text-lg md:text-xl'>Returns policy</li>
        </ul>
     
        </div>
        <p className=' text-center md:text-left'>Copyright 2022 Avion LTD</p>
        </div>
      
    </div>
  )
}

export default footer