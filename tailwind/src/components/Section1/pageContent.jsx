import React from 'react'
import LeftContent from './leftContent.jsx'
import RightContent from './rightContent.jsx'

// import pageContent from './pageContent.jsx'


const PageContent = () => {
  return (
    <div className='py-10 flex gap-10 justify-between items-center h-[90vh] bg-amber-950  '>
        <LeftContent/>
        <RightContent/>
       
    </div>
  )
}

export default PageContent
