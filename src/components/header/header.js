import React, { useContext } from 'react';
import axios from 'axios';
import { toast, ToastContainer, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './header.css';
import { userContext } from '../../appContext';
import logo from '../../assets/white-logo.png'


const user = JSON.parse(localStorage.getItem('user'));

function Header() {
    const { state, setState } = useContext(userContext);

    const logout = (e) => {
        axios
            .post("http://127.0.0.1:8000/auth/logout/", {}, {
                headers: {
                    'Authorization': `token ${user.key}`,
                },
            })
            .then((res) => {
                toast.success(res.data.detail, {
                    position: "top-center",
                    autoClose: 5000,
                    transition: Zoom,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                localStorage.removeItem('user')
                localStorage.removeItem('username')

                setTimeout(() => {
                    setState({
                        ...state,
                        isAuthenticated: true,
                    })
                    window.location.href = 'http://localhost:3000/login'
                }, 5000)

            })
            .catch((err) => {
                console.log(err)
                toast.error("there is error with server please wait", {
                    position: "top-center",
                    autoClose: 5000,
                    transition: Zoom,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            });
    }
    const CheckUser = () => {
        if (window.location.href === 'http://localhost:3000/login') {
            return null;
        } else {
            return user ? <li onClick={logout}>Logout</li>
                : <li onClick={(e) => { window.location.href = 'http://localhost:3000/login' }}>Login</li>
        }
    }
    return (
        <div className='header'>
            <ul>
                <li><img src={logo} alt='' /></li>
                <li>About Us</li>
                <li>Why students data analytics?</li>
                <CheckUser />
            </ul>
        </div>
    )
}
export default Header;