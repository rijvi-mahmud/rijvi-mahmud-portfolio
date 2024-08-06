import Link from 'next/link'
import React from 'react'
import localFont from 'next/font/local'
import { cn } from '@/lib/utils'

const proto = localFont(
  {
    src: [
      {
        path: '../../assets/font/ProtestRiot-Regular.ttf',
        weight: '400',
        style: 'normal',
      },
    ],
    variable: "--font-proto",
  }
)

const Logo = ({className}) => {
  return (
    <Link href='/' className='select-none'>
                <h1 className={cn(
                    `text-2xl font-bold tracking-normal dark:text-zinc-100 text-zinc-900 flex items-baseline justify-center gap-[3px] transition-all [text-shadow:_0_1px_0_green] ${proto.className} ${className}`,
                )}>R<span className="relative flex size-[5px]">
                <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full size-[5px] bg-green-500"></span>
              </span></h1>
    </Link>
  )
}

export default Logo