import React from 'react';
import {  MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { useTheme } from '../context/ThemeContext.jsx'
import quotelogo from '../assets/quotelogo.png'

const  Navbar=()=> {

  const { isDarkMode, toggleTheme } = useTheme()


  return (
    <nav className={`${isDarkMode ? 'bg-cyan-900 text-gray-200 border-slate-600' : 'bg-emerald-300 text-gray-900 border-gray-200'}  fixed w-full z-20 top-0 left-0 border-b`}>
      <div className="max-w-screen-xxl flex flex-wrap items-center justify-between p-3">
        <a href='/' className="flex items-center">
          <img src={quotelogo} className="h-14 mr-3" alt="Flowbite Logo" />
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className={`focus:outline-none font-medium text-sm px-3 py-3 text-center md:mr-0 transition duration-300 ease-in-out transform hover:scale-110 border rounded-full `}
            onClick={toggleTheme}
          >
            {isDarkMode ? <MdOutlineLightMode size={20} /> : <MdOutlineDarkMode size={20} />}
          </button>
         
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;


