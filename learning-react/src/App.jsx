import React from 'react'

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault()
    console.log("Form submitted")
  }
  return (
    <div>
      <form
      onSubmit={(e)=>{
        submitHandler(e)
      }}
      >
        <input
        onChange={(e)=> {
          console.log(e.target.value)
        }}
        className='px-4 py-3 text-xl' type="text" placeholder='Enter your name' />
        <button className='px-4 py-3 text-xl font-semibold bg-emerald-600 rounded'>Submit</button>
      </form>
    </div>
  )
}

export default App