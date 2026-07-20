import React from 'react'
import "./index.css"




function click()
{
  a++;
  console.log("button clicked");
}

//useState

const [num,setNum]=useState(17);

function onChange(e)
{
    console.log(e.target.value);
}
function pageScrolling(elem)
{
    console.log("page is scrolling");

    if (elem.deltaY > 0) {
        console.log("Scrolling Down");
    } else if (elem.deltaY < 0) {
        console.log("Scrolling Up");
    }
    
}


 const App = () => {
  return (

    <div>
      
       <form>
         <input onChange={function(e)
         {
              onChange(e);
         }} type="text" placeholder="enter your name"></input>

          <button onClick={click}>Click me</button>
       </form>



{/* 
<div className="container"  onWheel={
        function(elem)
        {
             pageScrolling(elem);
        }
      }>

  <div className="page page1">Page 1</div>
  <div className="page page2">Page 2</div>
  <div className="page page3">Page 3</div>
</div> */}



/*useState*/
<h1>{num}</h1>


     




    </div>

  )
}

export default App
