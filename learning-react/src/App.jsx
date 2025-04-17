import React, { useState } from 'react'

const App = () => {
  const [num, setNum] = useState(0)
  const increase = () => {
    setNum(num + 1)
  }
  const decrease = () => {
    setNum(num - 1)
  }
  return (
    <div>
      <h3>Number is: {num}</h3>
      <button onClick={increase}>Increament</button>
      <button onClick={decrease}>Decreament</button>
    </div>
  )
}

export default App