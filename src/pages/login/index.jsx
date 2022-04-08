import React, { useContext } from 'react';
import axios from 'axios';
import Header from '../../components/header/header';
import { toast, Zoom } from 'react-toastify';
import LoginForm from '../../components/forms/loginForm';
import { userContext } from '../../appContext';
import '../auth.css';

function Login(props) {
    const { state, setState } = useContext(userContext);
    console.log(state)
    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://127.0.0.1:8000/auth/login/", {
                email: state.email,
                password: state.password,
            })
            .then((res) => {
                localStorage.setItem("user", JSON.stringify(res.data));
                toast.success('🚀 login successful!', {
                    position: "top-center",
                    autoClose: 5000,
                    transition: Zoom,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                const user = JSON.parse(localStorage.getItem('user'));
                axios.get("http://127.0.0.1:8000/auths/current-user/", {
                    headers: {
                        'Authorization': `token ${user.key}`,
                    },
                })
                    .then((res) => {
                        localStorage.setItem('username', JSON.stringify(res.data))
                    }).catch((err) => {
                        console.log(err)
                    })
                setState({
                    ...state,
                    userdata:JSON.parse(localStorage.getItem('username')),
                    email: '',
                    password: ''
                })
                setTimeout(() => {
                    window.location.href = 'http://localhost:3000/'
                }, 5000)

            })
            .catch((err) => {
                if (err.response.status === 400) {
                    toast.error("email and password doesn't match", {
                        position: "top-center",
                        autoClose: 5000,
                        transition: Zoom,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                } else {
                    toast.error(err.response.request.responseText, {
                        position: "top-center",
                        autoClose: 5000,
                        transition: Zoom,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                }
            });
    }
    return (
        <div className='auth-form'>
            <Header />
            <LoginForm email={state.email}
                password={state.password}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </div>
    )
}
export default Login;