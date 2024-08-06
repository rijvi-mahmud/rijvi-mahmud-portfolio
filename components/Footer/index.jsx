import React from 'react'
import Logo from '../ui/logo'
import SocialIcons from '../SocialIcons'
import FooterMenu from './FooterMenu'

const Footer = () => {
  return (
    <div className='px-10 flex flex-col gap-10 md:px-24 pt-20'>
        <div className='w-10 bg-transparent'>
            <Logo className={"text-4xl [text-shadow:_0_1px_0_green]"}/>
        </div>
           <div className='flex flex-col gap-10 md:flex-row md:justify-between items-stretch'>
           <div className='flex flex-col gap-6 basis-1/2'>
        <div>
            <p className='text-justify text-zinc-100/90 text-[15px]'>Self-driven, focused, and dedicated Web Developer with 2+ years of experience, including 1+ years of industrial experience. I am passionate about programming, developing new products, and exploring new technologies. Well-versed in modern web technologies and version control systems. Slow-paced learner, a good team player, and committed to achieving the goal. Determined to deliver quality with an emphasis on excellence.</p>
        </div>
        <div>
            <SocialIcons/>
        </div>
    </div>
        <FooterMenu/>
        <FooterMenu/>
           </div>
    <div className='text-center font-mono border-t border-zinc-600 md:py-12 mb-24 md:mb-0 pt-8 space-y-2'>
        <h1 className='text-base font-semibold text-zinc-400'>Designed & Developed by Rijvi</h1>
        <p className='text-sm text-zinc-500'>Copyright &copy; {new Date().getFullYear()}</p>
    </div>
    </div>
  )
}

export default Footer