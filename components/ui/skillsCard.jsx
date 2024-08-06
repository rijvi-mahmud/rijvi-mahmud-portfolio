import React from 'react'
import { Card, CardContent, CardHeader } from './card'

const SkillsCard = ({ name, type, Icon }) => {
    
  return (
    <Card className="min-w-[230px] w-full flex items-center justify-start h-20 rounded-xl text-gray-800 dark:text-zinc-300  dark:bg-green-950/5 ring-1 ring-yellow-50/5 select-none group border-none backdrop-blur-lg">
    <span className="-mt-20 ml-6 bg-zinc-50 dark:bg-gradient-to-bl dark:from-green-500/60 dark:to-yellow-500/60 ring-yellow-50/5 rounded-xl rotate-45 duration-200 ring-1 ">
        <Icon
            className="w-10 h-10 p-2 -rotate-45 group-hover:p-1.5 rounded-xl duration-200 text-black"
            aria-hidden="true"
        />

    </span>

    <CardHeader className="p-4 space-y-0 rounded-2xl w-full">
        <h6 className="text-md font-semibold text-white">
            {name}
        </h6>
        {/* <div className="grid grid-cols-5 gap-2 items-center">
            <div className="col-span-3"> */}
                <h5
                    className="text-zinc-400 dark:text-zinc-400 truncate text-sm"
                >
                    {type}
                </h5>
            {/* </div>
            
        </div> */}
    </CardHeader>
</Card>

  )
}

export default SkillsCard


