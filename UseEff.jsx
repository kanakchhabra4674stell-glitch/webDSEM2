import React from 'react'
import { useState,useEffect } from 'react'

function UseEff() {
    const [count,setCount]=useState(0)
    const [input,setInput]=useState("")

    function increment(){
        setCount(count+1)
    }
    
// component mount
    // useEffect(()=>{
    //     console.log("UseEffect Run")
    // })

// component mount only once
    // useEffect(()=>{
    //     console.log("UseEffect Run")
    // },[])
    
//component mount + update
    useEffect(()=>{
        console.log("UseEffect Run")
    },[count])
    
  return (
    <div>
        <h2>Count: {count}</h2>

        <input
        type="text"
        value={input}
        onChange={(e)=>setInput(e.target.value)}
        />
        <button onClick={increment}>+</button>
    </div>
  )
}
export default UseEff


