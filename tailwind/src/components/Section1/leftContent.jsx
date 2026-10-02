import React from 'react'
import LeftContentArrow from './leftContentArrow'
import LeftContentText from './leftContentText'

const LeftContent = () => {
  return (
    <div className='h-full flex flex-col justify-between w-1/3 '>
         
        <LeftContentText/>
        <LeftContentArrow/>
         
    </div>
  )
}

export default LeftContent
