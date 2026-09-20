import React from 'react'

import RightCard from './rightCard'

const RightContent = () => {
  return (

      <div className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6 w-2/3'>
        
       <RightCard/>
       <RightCard/>
       <RightCard/>
    
    </div>
  )
}

export default RightContent
