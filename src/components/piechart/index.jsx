import React from 'react';
import ReactApexChart from 'react-apexcharts';

function Piechart(props) {
    let state = {
        series: props.series,
        chartOptions: {
            
          },
        options: {
            labels: props.labels,
            chart: {
                type: 'donut',
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        position: 'bottom'
                    }
                }
            }]
        },
    };

    return (
        <>
            <ReactApexChart width={500} options={state.options} chartoptions={state.chartOptions} series={state.series} type="donut" />
        </>

    )
}
export default Piechart;