import React from 'react'
import { useTheme } from '../context/ThemeContext'

const Footer = () => {
    const {isDarkMode}=useTheme();
  return (
<footer class={`${isDarkMode?'bg-cyan-900':'bg-emerald-300'} w-full p-4 mt-32`}>
    <div class="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" class="hover:underline">Quote™</a>. All Rights Reserved.
    </span>
    </div>
</footer>

  )
}

export default Footer