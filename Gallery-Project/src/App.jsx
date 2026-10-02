import React from 'react'
import { useState } from 'react';
import './App.css';

const App = () => {

  const [image,setImage]=useState([]);

  const getData= async()=>
  {
  const api= await fetch(`https://picsum.photos/v2/list?page=2&limit=30`);
  const data=await api.json()
  console.log(data);
  setImage(data)

  }

getData();

  return (
    <div className="gallery">
      {
        image.map((elem,idx)=>
            {
                return (
                <img src={elem.download_url} alt={elem.author} key={idx} width="20" className="gallery-img"></img>
                );
            }
        )}
       
         
      
    </div>
  )
}

export default App
