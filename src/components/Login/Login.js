import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='email-container'>
            <h2>Login here</h2>
           <div className='email-field'>
           <p>email:</p>
          <div className='input-name'>
          <input type="text" name="" id="" />
          </div>
           </div>
           <div>
           <p>password:</p>
           <div className='password-field'>
           <input type="password" name="" id="" />
           </div>
           </div>

        </div>
    );
};

export default Login;