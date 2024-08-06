"use client"
import React from 'react'
import Logo from '@/components/ui/logo'
import ThemeButton from '../ThemeButton'
import Link from 'next/link'
import navItems from '@/data/menu'
import { cn } from '@/lib/utils'
import { usePathname } from 'next/navigation'

const Navbar = () => {
  const pathname = usePathname()
  return (
    <div className='sticky -top-2 h-24 sm:h-28 bg-gradient-to-b from-zinc-100 via-zinc-100/50 to-zinc-50/0 dark:bg-gradient-to-b dark:from-green-950/5 dark:via-green-950/5 dark:to-green-900/0 z-50 transition md:px-20'>
    <div className="w-full text-zinc-200 px-8 md:px-20 pt-8">
          <div className="flex items-center justify-between rounded-full py-4 backdrop-blur-lg dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit transition-all px-7 ">
        <Logo />
        <div className=''>
          <ul className='gap-6 hidden md:flex font-medium'>
            {navItems.map((item) => (
              <li key={item.href} className='relative'><Link href={item.href} className={cn("hover:text-green-100 relative after:absolute after:h-[1px] after:w-0 after:bg-slate-200 after:left-[1px] after:-bottom-0.5 after:rounded-full after:transition-all", 
              pathname === item.href ? "after:w-7/12" : "after:hover:w-8/12 ",
              )}>{item.name}</Link></li>
            ))}
          </ul>
        </div>
        <ThemeButton />
    </div>

          </div>
        </div>
        
  )
}

export default Navbar