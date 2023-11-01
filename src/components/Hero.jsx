import React, { useEffect, useState } from 'react'
import { useTheme } from '../context/ThemeContext'
import axios from 'axios'



const Hero = () => {
  const { isDarkMode } = useTheme()
  const [quote, setQuote] = useState([])

  

  const options = {
    method: 'GET',
    url: 'https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes',
    headers: {
      'X-RapidAPI-Key':({}).env.VITE_RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'quotes-by-api-ninjas.p.rapidapi.com'
    }
  };
  
  console.log(options)


  const getQuote = async () => {
    try {
      const response = await axios.request(options);
      setQuote(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(()=>{
    getQuote()
  },[])

  return (
    <div>
      <div className={`w-4/5 max-w-sm  border ${isDarkMode ? 'bg-cyan-900 text-gray-100' : 'bg-emerald-300 text-gray-900'} rounded-lg shadow  m-auto py-14 p-6 mt-40`}>
        {quote.map((quote) => (
          <div className="flex flex-col items-center pb-10">
            <h5 className={`mb-1 text-lg font-medium `}>
              {quote.quote}
            </h5>
            <span className={`text-sm`}>
              ~{quote.author}
            </span>
            <div className="flex mt-4 space-x-3 md:mt-6">
              <button onClick={() => getQuote()} type="button" class={` bg-gradient-to-r ${isDarkMode ? 'from-cyan-400 via-cyan-500 to-cyan-600 ' : 'from-lime-200 via-lime-400 to-lime-500 '}  hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2`}>Get Quotes</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Hero