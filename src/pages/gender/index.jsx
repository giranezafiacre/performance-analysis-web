import React, { useState, useEffect } from 'react';
import Histogram from '../../components/histogram';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar';

function Gender() {
    const [data, setData] = useState();
    const [course,setCourse] = useState();
    const [maleMarks,setMaleMarks] = useState()
    const [femaleMarks,setfemaleMarks] = useState()
    const getData = async () => {
        if(!localStorage.getItem('username')){
            window.location.href = 'http://localhost:3000/login'
        }
        const response = await fetch("http://127.0.0.1:8000/gender-histogram/")
            .then((res) => res.json())
            .catch((error) => {
                console.log(error)
            });
        console.log(response.data)
        setData(response)
        let y = [], x1 = [], x2 = []
        
        await response.data.forEach((i)=>{
            y.push(Object.keys(i)[0])
            x1.push(Object.values(i)[0]['male'])
            x2.push(Object.values(i)[0]['female'])
        })
        setCourse(y)
        setMaleMarks(x1)
        setfemaleMarks(x2)
        console.log('y:\n',y,'x1:\n',x1,'x2:\n',x2)
    }
    useEffect(() => {
        if (!data) getData();
    })
    return (
        <>
            <Header />
            <div style={{ 'display': 'flex', 'align-items': 'start' }}>
                <div>
                    <Sidebar element='gender' />
                </div>
                <div>
                    <Histogram labels={course} series={[ 
                        {
                            name: 'male',
                            type: "column",
                            data: maleMarks
                        },
                        {
                            name: 'female',
                            type: "column",
                            data: femaleMarks
                        }]} xtitle='Courses' ytitle='Marks'/>
                </div>
            </div>
        </>
    )
}
export default Gender;