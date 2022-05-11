import React, { useState, useEffect } from 'react';
import Histogram from '../../components/histogram';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar';

function Health() {
    const [data, setData] = useState();
    const [course,setCourse] = useState();
    const [normalMarks,setNormalMarks] = useState()
    const [chronic_diseaseMarks,setChronic_diseaseMarks] = useState()
    const [disabilityMarks,setDisabilityMarks] = useState()
    const getData = async () => {
        const response = await fetch("http://127.0.0.1:8000/health-histogram/")
            .then((res) => res.json())
            .catch((error) => {
                console.log(error)
            });
        console.log(response.data)
        setData(response)
        let y = [], x1 = [], x2 = [], x3 = []
        
        await response.data.forEach((i)=>{
            y.push(Object.keys(i)[0])
            x1.push(Object.values(i)[0]['normal'])
            x2.push(Object.values(i)[0]['chronic_disease'])
            x3.push(Object.values(i)[0]['disability'])
        })
        setCourse(y)
        setNormalMarks(x1)
        setChronic_diseaseMarks(x2)
        setDisabilityMarks(x3)
        console.log('y:\n',y,'x1:\n',x1,'x2:\n',x2,'x3:\n',x3)
    }
    useEffect(() => {
        if (!data) getData();
    })
    return (
        <>
            <Header />
            <div style={{ 'display': 'flex', 'align-items': 'start' }}>
                <div>
                    <Sidebar element='health' />
                </div>
                <div>
                    <Histogram labels={course} series={[ 
                        {
                            name: 'normal',
                            type: "column",
                            data: normalMarks
                        },
                        {
                            name: 'chronic_disease',
                            type: "column",
                            data: chronic_diseaseMarks
                        },
                        {
                            name: 'disability',
                            type: "column",
                            data: disabilityMarks
                        }]} xtitle='Courses' ytitle='Marks'/>
                </div>
            </div>
        </>
    )
}
export default Health;