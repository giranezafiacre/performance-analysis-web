import React, { useState } from 'react';
import gmail from '../../../assets/gmail.png';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import password from '../../../assets/password.png';

function LoginForm(props) {
    const [type,setType] = useState(true)
        return (
            <div className='form'>
                <ToastContainer />
                <h1>login form</h1>
                <form onSubmit={props.handleSubmit} method='GET' action='/'>
                    <div className='input'>
                        <label id="icon" htmlFor="email">
                            <img alt='' src={gmail} />
                        </label>
                        <input type="email" name="email"
                            id="email" onChange={props.handleChange}
                            placeholder="Email" value={props.email} 
                            required
                        />
                    </div>
                    <div className='input'>
                        <label id="icon" htmlFor="password">
                            <img alt='' src={password} />
                        </label>
                        <input type={type?'password':'text'} name="password"
                            id="password" onChange={props.handleChange}
                            placeholder="Password" value={props.password} 
                            required
                        />
                    </div>
                    <div className=''>
                       <input type="checkbox" className="form-check-input" onClick={(e)=>{
                        setType(!type);
                        }} />{' '}Show Password
                    </div>
                    
                    <div className='button'>
                        <button type='submit'>submit</button>
                    </div>
                    <div className='note'>
                        <span>don't have account?<a href='./signup'>signup here</a></span>
                    </div>
                </form>
            </div>
        )
}
export default LoginForm;