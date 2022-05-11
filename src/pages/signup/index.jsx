import React from 'react';
import axios from 'axios';
import Header from '../../components/header/header';
import SignupForm from '../../components/forms/signupForm';
import { toast, Zoom } from 'react-toastify';
import '../auth.css';

class signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            fullname: '',
            password: '',
            confirmPassword: '',
            submitted: false,
            visible: false,
            passwordInfo: 'include atleast 1 lower case letter, 1 uppercase letter, 1 number and 1 special character'
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onBlur = this.onBlur.bind(this);
    }
    onMouseDown(e) {
        this.setState({
            visible: true
        })
    }
    onBlur(e) {
        this.setState({
            visible: false
        })
    }
    changeNotification(password) {

        var missing = []
        if (!/[a-z]/.test(password)) {
            missing.push('1 lowercase');
        }
        if (!/[A-Z]/.test(password)) {
            missing.push('1 uppercase')
        }
        if (!/[0-9]/.test(password)) {
            missing.push('1 number')
        }
        if (!/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(password)) {
            missing.push('1 special character')
        }
        if (!password || password.length < 6) {
            missing.push('6 characters')
        }
        if (missing.length === 0) {
            this.setState({
                passwordInfo: 'Strong password'
            })
        } else {
            this.setState({
                passwordInfo: 'use atleast ' + missing.join(',')
            })
        }
    }
    componentDidMount() {
        this.nofication = this.changeNotification();
    }
    handleChange(e) {
        if (e.target.name === "password") {
            this.changeNotification(e.target.value);
            this.setState({
                [e.target.name]: e.target.value
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value
            })
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        if (this.state.password === this.state.confirmPassword) {
            axios
                .post("http://127.0.0.1:8000/auth/register/", {
                    email: this.state.email,
                    fullname: this.state.fullname,
                    password: this.state.password,
                })
                .then((res) => {
                    toast.success('🚀 sign up successful!', {
                        position: "top-center",
                        autoClose: 5000,
                        transition: Zoom,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })
                    setTimeout(() => {
                        this.setState({
                            email: '',
                            fullname: '',
                            password: '',
                            confirmPassword: ''
                        });
                    this.props.history.push("/login");
                    },5000)
                    
                })
                .catch((err) => { 
                    console.log(err.response)
                    if(err.response.status === 400){
                        console.log(err.response)
                    toast.error('Bad Request', {
                        position: "top-center",
                        autoClose: 5000,
                        transition: Zoom,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    })}else{
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
        } else {
            toast.error('password should match', {
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
    }
    render() {
        return (
            <div className='auth-form'>
                <Header />
                <SignupForm
                    email={this.state.email}
                    fullname={this.state.fullname}
                    password={this.state.password}
                    confirmPassword={this.state.confirmPassword}
                    submitted={this.state.submitted}
                    visible={this.state.visible}
                    passwordInfo={this.state.passwordInfo}
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    onMouseDown={this.onMouseDown}
                    onBlur={this.onBlur}
                />
            </div>
        )
    }
}
export default signup;