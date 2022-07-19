import React, { useState, useEffect } from 'react';
import Histogram from '../../components/histogram';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar';

function Teacher() {
    const [data, setData] = useState();
    const getData = async () => {
        if(!localStorage.getItem('username')){
            window.location.href = 'http://localhost:3000/login'
        }
        const response = await fetch("http://127.0.0.1:8000/teacher-histogram/")
            .then((res) => res.json())
            .catch((error) => {
                console.log(error)
            });
        console.log(response.data)
        setData(response)
    }
    useEffect(() => {
        if (!data) getData();
    })
    return (
        <>
            <Header />
            <div style={{ 'display': 'flex', 'align-items': 'start' }}>
                <div>
                    <Sidebar element='teacher' />
                </div>
                <div >
                    <Histogram labels={Object.keys(data?data:'')} series={[ 
                        {
                            name: 'marks',
                            type: "column",
                            data: Object.values(data?data:'')
                        }]} xtitle='Teacher' ytitle='Marks'/>
                </div>
            </div>
        </>
    )
}
export default Teacher;