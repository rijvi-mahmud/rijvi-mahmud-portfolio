import React from 'react'
import Link from 'next/link';
import { cn } from '@/lib/utils';
import socialLinks from '@/data/socialLinks';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SocialIcons = () => {
  return (
    <div className='flex gap-5 ml-1'>
       {socialLinks.map((item, index) => (
          <TooltipProvider key={item.href}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href={item.href} target="_blank" key={index}>
                  <item.icon className={cn(
                    'size-6 hover:scale-110 transition',
                    item.href.match(/^mailto?:\/\//) ? 'hover:stroke-green-500' : 'hover:text-green-500'
                  )} />
                </Link>
              </TooltipTrigger>
              <TooltipContent className="animate-none transition-none delay-0 dark:bg-green-500 font-medium">
                {item.name}
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
       ))}
    </div>
  )
}

export default SocialIcons