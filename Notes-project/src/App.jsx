import React, { useState } from 'react'

const App = () => {
  const [heading,setHeading]=useState('');
  const[details,setDetails]=useState('');
  const[index,setIndex]=useState(null);

  const[task,setTask]=useState([]);

  function submitHandler(e)
  {
    e.preventDefault();

    
    const copyTask=[...task];
    
    
    if(index!=null)   
    {
        copyTask[index]={heading,details};
    }
   else
   {
    copyTask.push({heading,details});
   }

    setTask(copyTask);

    console.log("form Submitted ")
    console.log(e);
    console.log(e.target[0].value);

    setHeading('');
    setDetails(''); 
 
    setIndex(null);
    
  }
  return (
    <div>
      <form onSubmit={(e)=>
        {
            submitHandler(e)
        }
      }>
        

        <input name="heading" placeholder="notes-heading" value={heading} onChange={(e)=>
          {
              setHeading(e.target.value);
          }
        }></input>
        <textarea name="notes-details" rows="12" cols="32"  placeholder="notes-details" value={details} onChange={(e)=>
          {
            setDetails(e.target.value);
          }
        }></textarea>
        <button >Submit</button>

      </form>



      {/* //to print the detailss */}
       <div>
            {
              task.map((note,index)=>
              {
                  return (
                    <div key={index}>
                      <h3>{note.heading}</h3>
                       <p>{note.details}</p>


                        <button onClick={()=>
                        {
                            setHeading(note.heading);
                            setDetails(note.details);
                            setIndex(index);

                        }

                        }>Update</button>

                    </div>
                     

                     
       
                  );


              }
            )}
       </div>


      
    </div>
  )
}

export default App
