import React, { useEffect } from 'react'
import { useState } from 'react';
import './App.css';

const App = () => {

  const [image,setImage]=useState([]);
  const [index,setIndex]=useState(1);
  const[loading,setLoading]=useState(false);

  const getData= async()=>
  {
    setLoading(true);
  const api= await fetch(`https://picsum.photos/v2/list?page=${index}&limit=30`);
  const data=await api.json()
  console.log(data);
  setImage(data);
  setLoading(false);

  }

useEffect(function()
{
  getData();
},index)


  return (
    <div className="gallery">
      {loading? <h2>Loading...</h2>: image.map((elem,idx)=>
            {
                return (
                <img src={elem.download_url} alt={elem.author} key={idx} width="20" className="gallery-img"></img>
                );
            }
        )}
        <h1>{index}</h1>
       
        <button disabled={index===1} onClick={function()
          {
               if(index>1)
               {
              setIndex(index-1);
               }
          }
        } className="btn">Prev</button> 
        
        <button onClick={function()
          {
            setIndex(index+1);
          }
        } className="btn">Next</button>
      
    </div>
  )
}

export default App


//loading is not workingg
//triple equals
// the dta is coming again and again on the console from the api
//and the github code of this because i m not getting how they have printed the images without the img tag