import React from 'react';
import gmail from '../../../assets/gmail.png';
import username from '../../../assets/username.png';
import password from '../../../assets/password.png';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function signupForm(props) {
    return (
        <div className='form'>
            <ToastContainer />
            <h1>signup form</h1>
            <form onSubmit={props.handleSubmit} method='POST' >
                <div className='input'>
                    <label id="icon" htmlFor="email">
                        <img alt='' src={gmail} />
                    </label>
                    <input type="email" name="email"
                        onChange={props.handleChange} value={props.email}
                        placeholder="Email" required
                    />
                </div>
                <div className='input'>
                    <label id="icon" htmlFor="fullname">
                        <img alt='' src={username} />
                    </label>
                    <input type="text" name="fullname"
                        onChange={props.handleChange} value={props.fullname}
                        placeholder="Full name" required
                    />
                </div>
                <div className='input'>
                    <label id="icon" htmlFor="password">
                        <img alt='' src={password} />
                    </label>
                    <input type="password" name="password"
                        onMouseDown={props.onMouseDown} onBlur={props.onBlur} onChange={props.handleChange}
                        value={props.password} placeholder="Password" required
                    />
                </div>
                <div className='passwordInfo' style={{
                    display: props.visible ? 'block' : 'none',
                    backgroundColor: props.passwordInfo === 'Strong password' ? '#459445' : '#00bfff'
                }}>
                    {props.passwordInfo}
                </div>
                <div className='input'>
                    <label id="icon" htmlFor="password">
                        <img alt='' src={password} />
                    </label>
                    <input type="password" name="confirmPassword"
                        onChange={props.handleChange} value={props.confirmPassword}
                        placeholder=" confirm password" required
                    />
                </div>
                <div className='button'>
                    <button type='submit'>submit</button>
                </div>
                <div className='note'>
                    <span>
                        already have account?
                        <a href='./login'>login here</a>
                    </span>
                </div>
            </form>
        </div>
    )
}
export default signupForm