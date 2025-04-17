import React, { useState } from 'react'

const Counter = () => {
    const [first, setFirst] = useState(0)
    const increasekro = () => {
        setFirst(first + 1)
    }
    const decreasekro = () =>{
        setFirst(first - 1)
    }
  return (
    <div>
        <h1>Counter</h1>
        <h2>{first}</h2>
        <button onClick={increasekro}>Increase</button>
        <button onClick={decreasekro}>Decrease</button>
    </div>
  )
}

export default Counter