import React, { useState, useEffect } from 'react';
import Header from '../../components/header/header';
import { toast, Zoom } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Factors from './factors';
import './index.css';

function Correlations() {
    const [data, setData] = useState();
    const [course, setCourse] = useState('select');
    const [factor, setFactors] = useState('select');
    const getData = async () => {
        const response = await fetch("http://127.0.0.1:8000/file/" + localStorage.getItem('file') + "/")
            .then((res) => res.json())
            .catch((error) => {
                console.log(error)
            });
        setData(Object.keys(response))
        console.log(Object.keys(response))
    }

    useEffect(() => {
        if (!data) getData();
    })
    const renderCourses = data ? data.map((file) => {
        return (
            <>
                <option value={file}>
                    {file}
                </option>
            </>)
    }) : () => {}


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(factor, course)
        localStorage.setItem('factor', factor)
        localStorage.setItem('course', course)
        toast.success('redirecting...', {
            position: "top-center",
            autoClose: 3000,
            transition: Zoom,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

        setTimeout(() => {
            window.location.href = "http://localhost:3000/correlations-output"
        }, 3500)
    }
    return (
        <div className='auth-form'>
            <Header />
            <div className='form'>
                <ToastContainer />
                <h1>analysis form</h1>
                <form onSubmit={handleSubmit} method='POST' action='/'>
                    <div className='input'>
                        <label id="icon" htmlFor="email">
                            Course
                        </label>
                        <select value={course} onChange={(e) =>
                            setCourse(e.target.value)
                        } >
                            <option selected value="select">Select a course</option>
                            {renderCourses}
                        </select>
                    </div>
                    <div className='input'>
                        <label id="icon" htmlFor="password">
                            Factors
                        </label>
                        <select value={factor} onChange={(e) =>
                            setFactors(e.target.value)}>
                            <option value="select">Select a factor</option>
                            <Factors />
                        </select>
                    </div>

                    <div className='button'>
                        <button type='submit'>Analyze</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Correlations;