import { useContext, useState } from 'react';
import React from 'react';
import UserContext from '../context/UserContext'
function Login() {
    const handleSubmit = ()=>{

    }
  return (
    <div>
        <h2>Login</h2>
        <input type="text" placeholder='username'/>
        <input type="password" placeholder='password'/>
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login