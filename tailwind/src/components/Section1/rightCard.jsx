import React from 'react'
import professionalPhoto from '../../assets/1st professional.jpg'
import RightCardContent from './rightCardContent'
const rightCard = (props) => {
  return (
    
        <div  className='h-full shrink-0 overflow-hidden relative w-80 rounded-4xl'>
                  <img className='h-full w-full object-cover'src={props.img} alt='Photo'></img>
                   <RightCardContent tag={props.tag} intro={props.intro}/>
                   
        </div>
        
      
   
  )
}

export default rightCard
