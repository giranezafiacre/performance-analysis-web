import React, { useState, useEffect } from 'react';
import Header from '../../components/header/header';
import Histogram from '../../components/histogram';
import ScatterChart from '../../components/scatterChart';
import Piechart from '../../components/piechart';

function Piecharts(props) {
    console.log(props.datas)
    let k=0
    if(props.datas){
        const charts= props.datas?.map((data)=>{
            k++;
          return(
          <div style={{'marginBottom':'120px','marginLeft':'-60px'}} key={k}>
            <h4>{data['name']}</h4>
            <Piechart labels={['succeeded','failed']} series={[data['succeeded'],data['failed']]} />
          </div> 
          );
        })
        return charts
    }else{
     return null;
    }
    
}
function CorrelationResult() {
    const [data, setData] = useState();
    const [marks, setMarks] = useState();
    const [factor, setFactor] = useState();
    const [course, setCourse] = useState();
    const getData = async () => {
        if (!localStorage.getItem('username')) {
            window.location.href = 'http://localhost:3000/login'
        }
        if (localStorage.getItem('factor') == 0) {
            setFactor('Teachers')
        }
        if (localStorage.getItem('factor') == 1) {
            setFactor('Background')
        }
        if (localStorage.getItem('factor') == 2) {
            setFactor('Health Status')
        }
        if (localStorage.getItem('factor') == 3) {
            setFactor('Gender')
        }
        if (localStorage.getItem('factor') == 4) {
            setFactor('Program')
        }
        setCourse(localStorage.getItem('course'))
        var dataInput = new FormData();
        dataInput.append('factor', localStorage.getItem('factor'));
        dataInput.append('course', localStorage.getItem('course'));
        const response = await fetch("http://127.0.0.1:8000/correlation/" + localStorage.getItem('file') + "/",
            { method: 'POST', body: dataInput }
        )
            .then((res) => res.json())
            .catch((error) => {
                console.log(error)
            });

        console.log(response)
        setData(response)
    }

    useEffect(() => {
        if (!data) getData();
    })
    return (
        <>
            <Header />
            <div style={{ 'display': 'flex', 'alignItems': 'start', 'justifyContent': 'center', 'marginTop': '80px' }}>

                <div style={{ 'marginRight': '20px' }}>
                    <Histogram labels={Object.keys(data ? data.marks_factors : '')} series={[
                        {
                            name: 'marks',
                            type: "column",
                            data: Object.values(data ? data.marks_factors : '')
                        }]} xtitle={factor} ytitle={'Marks of ' + course} />
                </div>
                <div>
                    <h3 style={{ 'textTransform': 'uppercase', 'color': 'green', 'letterSpacing': '0.1em' }}>description</h3>
                    <div className='diagram-description'>
                        <p><span >type of diagram shown:</span>scatter diagram</p>
                        <p><span>type of correlation:</span>{data?.correlation_result > 0 ? 'positive correlation' : 'negative correlation'}</p>
                        <p><span>correlation coefficient:</span>{(data?.correlation_result == -2) ? 'not applicable' : data?.correlation_result.toFixed(2)}</p>
                        <Piecharts datas={data?.data} />
                    </div>
                </div>
            </div>
        </>
    )
}
export default CorrelationResult;