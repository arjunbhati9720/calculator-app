import { isDisabled } from '@testing-library/user-event/dist/utils'
import React, { useState } from 'react'

const Counter = () => {
 const [state,setState]=useState(0)
    
    const increment=(e)=>{ 
        e.preventDefault()
        if(state<10){
           setState (state+1)
         }
        console.log(state)
    }
    const decrement=(e)=>{
        e.preventDefault()
        if(state>0){
            setState (state-1)
        }
        console.log(state)
    }
  return (
    <div>
        <input style={{backgroundColor:"red"}}  placeholder='increment' value={state}/>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
    </div>
    
  )
}

export default Counter