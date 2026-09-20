import React from 'react'
import professionalPhoto from '../../assets/1st professional.jpg'
const rightCard = () => {
  return (
    
        <div  className='h-full shrink-0 overflow-hidden relative w-80 rounded-4xl'>
                  <img className='h-full w-full object-cover'src={professionalPhoto} alt='Photo'></img>
        
        
                      {/*Card-content*/}
                <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
                    <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>1</h2>
        
                    <div>
                      <p className='text-shadow-2xs text-xl leading-relaxed text-white mb-14'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto magni maxime recusandae culpa quidem exercitationem quibusdam pariatur in om.</p>
                    
        
                    {/*buttons*/}
                    <div className='flex justify-between'>
                        <button  className=' bg-blue-500 text-white font-medium px-8 py-2 rounded-full'> Satisfied </button>
                        <button className=' bg-blue-500 text-white font-medium px-3 py-2 rounded-full'><i className='ri-arrow-right-line'></i></button>
                    </div>
                    </div >
                </div>
                </div>
        
      
   
  )
}

export default rightCard
