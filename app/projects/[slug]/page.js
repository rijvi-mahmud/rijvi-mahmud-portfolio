import React from 'react'

const page = ({params}) => {
  return (
    <div className='text-4xl'>{params.slug} page</div>
  )
}

export default page