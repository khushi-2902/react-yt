import React, { useState } from 'react'
import  './App.css'

const App = () => {

  const [title,setTitle]=useState('');

  function submitHandler(e){
    e.preventDefault();
    console.log("form is submitted");
    console.log(title);
           
     setTitle('');
  }
   
   
  return (


    <div className='counter-container' >
       <form className='input-form' onSubmit={(e)=>
        {
          submitHandler(e);
          
        }
       }>
          <input onChange={(e)=>
            {
               
               setTitle(e.target.value);
            }
          } type="text" placeholder='user-name' value={title} className="custom-input"></input>
          <button className='btn-submit' type='submit'>Submit</button>
       </form>
    </div>
  )
}

export default App
