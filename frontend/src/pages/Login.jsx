import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className='p-3 max-w-lg mx-auto mt-28'>
    <h1 className='text-3xl text-center font-semibold my-7'>Login</h1>
    <form className='flex flex-col gap-4 '>
      <input
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className='bg-slate-100 p-3 rounded-lg'
        type="text"
        placeholder='Username' />
      
      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className='bg-slate-100 p-3 rounded-lg'
        type="password"
        placeholder='Password'
        id='password' />
        <button
          className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95'>
            Login
        </button>
    </form>
    <div className='flex gap-2 mt-5'>
      <p>Dont have an account?</p>
      <Link to='/register'>
        <span className='text-blue-500 '>Register</span>
      </Link>
    </div>
    </div>
  )
}

export default Login