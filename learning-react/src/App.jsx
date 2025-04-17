import React from 'react'



const App = () => {

  const user = 'John Doe'
  const changeuser = () => {
    console.log('User changed')
  }
  return (
    <div>Usrname is {user}
    <button onClick={changeuser}>Change user</button>
    </div>
  )
}

export default App