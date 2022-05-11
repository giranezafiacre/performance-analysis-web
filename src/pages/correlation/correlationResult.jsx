import React, { useState, useEffect } from 'react';
import Header from '../../components/header/header';
import ScatterChart from '../../components/scatterChart';

function CorrelationResult() {
    const [data, setData] = useState();

    const getData = async () => {
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
        console.log('hi:', response)
        setData(response)
    }

    useEffect(() => {
        if (!data) getData();
    })
    return (
        <>
            <Header />
            <div style={{ 'display': 'flex', 'alignItems': 'start','justifyContent':'center', 'marginTop':'80px' }}>

                <div style={{'marginRight':'20px'}}>
                    {data ? <ScatterChart series={[{
                        name: 'x:' + localStorage.getItem('factor') + ' y:' + localStorage.getItem('course'),
                        data: data.marks_factors
                        
                    }]} categories={["normal","disability","chronic_disease"]} xtitle='Background' ytitle='Marks'/> : ''}
                </div>
                <div>
                    <h3 style={{'textTransform':'uppercase','color':'green','letterSpacing':'0.1em'}}>description</h3>
                    <div className='diagram-description'>
                        <p><span >type of diagram shown:</span>scatter diagram</p>
                        <p><span>type of correlation:</span>{data?.correlation_result > 0 ? 'positive correlation' : 'negative correlation'}</p>
                        <p><span>correlation coefficient:</span>{data?.correlation_result.toFixed(2)}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default CorrelationResult;