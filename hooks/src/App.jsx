import React from 'react'
import './App.css' 
import { useState } from 'react';






const App = () => {


  const[num,setNum]=useState(0);


function increase()
{
   setNum(num+1);

}

function decrease()
{
   setNum(num-1);

}


  
  return (
    <div>

   <div className="counter-container">
   <div className="counter-value">{num}</div>
   <div className="counter-buttons">
    <button className="counter-btn btn-decrease" onClick={decrease}>-</button>
    <button className="counter-btn btn-increase" onClick={increase}>+</button>
  </div>
  </div>


    </div>
  )
}

export default App
