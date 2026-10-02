import React from 'react'

const rightCardContent = (props) => {
  return (
    <div>

        
                      {/*Card-content*/}
                <div className='absolute top-0 left-0 h-full w-full p-8 flex flex-col justify-between'>
                    <h2 className='bg-white text-xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>1</h2>
        
                    <div>
                      <p className='text-shadow-2xs text-xl leading-relaxed text-white mb-14'>{props.intro}</p>
                    
        
                    {/*buttons*/}
                    <div className='flex justify-between'>
                        <button  className=' bg-blue-500 text-white font-medium px-8 py-2 rounded-full'> {props.tag} </button>
                        <button className=' bg-blue-500 text-white font-medium px-3 py-2 rounded-full'><i className='ri-arrow-right-line'></i></button>
                    </div>
                    </div >
                </div>
      
    </div>
  )
}

export default rightCardContent
