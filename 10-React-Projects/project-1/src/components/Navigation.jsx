import React from 'react'

const Navigation = () => {
  return (
    <>
     
     <nav className='flex items-center justify-around mt-10'>
        <div><img src="/images/brand_logo.png" alt="logo" /></div>
        <ul className='flex items-center justify-between gap-10'> 
          <li href="#">Menu</li>
          <li href="#">Location</li>
          <li href="#">About</li>
          <li href="#">Contact</li>
        </ul>
        <button className='px-4 py-3 text-xl font-semibold bg-red-600 rounded text-white'>Login</button>

      </nav> 

    </>
  )
}

export default Navigation