import React from 'react'

import RightCard from './rightCard'

const RightContent = (props) => {
  return (

      <div className='h-full flex rounded-4xl overflow-x-auto flex-nowrap gap-10 p-6 w-2/3'>
        
       <RightCard img={props.users[0].img} tag={props.users[0].tag} intro={props.users[0].intro}/>
       <RightCard img={props.users[1].img} tag={props.users[1].tag} intro={props.users[1].intro}/>
       <RightCard img={props.users[2].img} tag={props.users[2].tag} intro={props.users[2].intro}/>
    
    </div>
  )
}

export default RightContent
