
import React ,{ useState }from 'react'

export default function App() {
  const[counts1,setCounts1]=useState(0);
  const[counts2,setCounts2]=useState(10);
  
  function myfun()
  {
    setCounts1(counts1+1)
  }
  function myfun1()
  {
    setCounts1(counts1-1)
  }
  function myfun2()
  {
    setCounts2(counts2+1)
  }
  
  return (

    <>
    
    <img src='' onClick={myfun}></img>
    <button onClick={myfun}>Increase</button>
    <button onClick={myfun1}>Decrease</button>
    <span>{setCounts1}</span>
    <button onMouseOver={myfun2}>Increase1</button>
    <span>{setCounts2}</span>


    

    </>
  )
}