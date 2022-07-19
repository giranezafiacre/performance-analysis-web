
import React from 'react';
import ReactApexChart from 'react-apexcharts';

class ScatterChart extends React.Component {
  constructor(props) {
    
    super(props);

    this.state = {

      series: props.series,
      options: {
        chart: {
          height: 350,
          type: 'scatter',
          zoom: {
            enabled: true,
            type: 'xy'
          }
        },
        xaxis: {
          tickAmount:props.tickAmount,
          labels: {
            formatter: function (value) {
              const factors=JSON.parse(localStorage.getItem('factors'))
              return factors[value];
            }
          },
          title: {
            text: props.xtitle,
          },
        },
        yaxis: {
          tickAmount: 7,
          title:{
            text:props.ytitle,
          },
        }
      },


    };
  }



  render() {
    return (
      <div id="chart">
        <ReactApexChart series={this.state.series} options={this.state.options} type="scatter" height={440} width={850} />
      </div>)
  }
}
export default ScatterChart;