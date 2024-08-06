import Image from 'next/image'
import Hero from "@/public/3.png"
const HeroImage = () => {
  return (
    <div className='size-52 select-none isolate mx-auto mb-10 md:basis-1/2 md:text-end md:pr-6'>
      <div className='inline-flex group -ml-3'>
        <Image src={Hero} decoding='async' placeholder='blur' fetchPriority='high' alt="hero" className='rounded-xl z-20 absolute group-hover:scale-90 size-60 transition rotate-3 scale-95 select-none origin-center'/>
        <span className='relative size-56 mt-6 ml-6 border-2 border-green-500/50 dark:border-green-500/10 rounded-2xl  group-hover:-translate-x-1 group-hover:-translate-y-1 group-hover:scale-99 transition delay-75 rotate-3'></span>
    </div>
    </div>
  )
}

export default HeroImage