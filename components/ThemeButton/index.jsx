'use client'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const ThemeButton = () => {
   const {resolvedTheme, setTheme} = useTheme();
   const [mounted, setMounted] = useState(false);

   useEffect(() => {
    setMounted(true)
   }, []);
   if(!mounted) return <div className='size-6 bg-transparent'></div>
  return (
    <div className='cursor-pointer transition-all'>
        {resolvedTheme === 'dark' ? (
          <div className='size-6 bg-transparent'>
            <SunIcon onClick={() => setTheme('light')} className='size-6 transition'/>
          </div>
        ) : (<div className='size-6 bg-transparent'><MoonIcon onClick={() => setTheme('dark')} className='size-6 invert transition'/></div>) }
    </div>
  )
}

export default ThemeButton