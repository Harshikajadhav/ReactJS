import React, { useState } from 'react'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log("email is", email)
        console.log("password is", password)

        setEmail('')
        setPassword('')
    }
  return (
    <div className="flex h-screen w-screen items-center justify-center">
        <div className='border-2 border-emerald-600 rounded-xl p-20'>
            <form
            onSubmit={(e)=>{
                submitHandler(e)
            }}
            className='flex flex-col items-center justify-center'>
                <input
                value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                }}
                required
                className='placeholder:text-gray-500 outline-none border-2 border-emerald-600 text-xl py-4 px-5 rounded-full' type="email" placeholder='Enter your email' />
                
                
                <input
                value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required
                className='placeholder:text-gray-500 outline-none border-2 border-emerald-600 text-xl py-4 px-5 rounded-full mt-3' type="password" placeholder='Enter Password' />
                <button  className='placeholder:text-white outline-none border-none bg-emerald-600 text-xl py-4 px-27 rounded-full mt-15'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login