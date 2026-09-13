import React from 'react'
import LeftContent from './leftContent.jsx'
import RightContent from './rightContent.jsx'

// import pageContent from './pageContent.jsx'


const PageContent = () => {
  return (
    <div className='pb-16 pt-6  flex items-center gap-10 h-[90vh]  px-18 '>
        <LeftContent/>
        <RightContent/>
       
    </div>
  )
}

export default PageContent
