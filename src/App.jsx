import React from 'react'
import Navbar from './components/Navbar'
import { useTheme } from './context/ThemeContext'
import Hero from './components/Hero'
import Footer from './components/Footer'

const App = () => {
  const {isDarkMode}=useTheme()
  return (
    <div className={`flex flex-col ${isDarkMode?'bg-cyan-600':'bg-emerald-700'} h-full`}>
    <Navbar/>
    <Hero/>
    <Footer/>
    </div>
  )
}

export default App