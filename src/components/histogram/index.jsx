import React from "react";
import Chart from "react-apexcharts";

function Histogram(props) {
  const state = {
    optionsMixedChart: {
      chart: {
        id: "basic-bar",
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          columnWidth: "50%"
        }
      },
      stroke: {
        width: [4, 0, 0]
      },
      xaxis: {
        categories: props.labels,
        title:{
          text:props.xtitle,
        },
      },
      markers: {
        size: 6,
        strokeWidth: 3,
        fillOpacity: 0,
        strokeOpacity: 0,
        hover: {
          size: 8
        }
      },
      yaxis: {
        title:{
          text:props.ytitle,
        },
        tickAmount: 8,
        labels: {
          formatter: function (val) {
            return parseFloat(val).toFixed(2)
          }
        },
        min: 0,
        max: 20
      }
    },
    seriesMixedChart: props.series,
    optionsRadial: {
      plotOptions: {
        radialBar: {
          startAngle: -135,
          endAngle: 225,
          hollow: {
            margin: 0,
            size: "70%",
            background: "#fff",
            image: undefined,
            imageOffsetX: 0,
            imageOffsetY: 0,
            position: "front",
            dropShadow: {
              enabled: true,
              top: 3,
              left: 0,
              blur: 4,
              opacity: 0.24
            }
          },
          track: {
            background: "#fff",
            strokeWidth: "67%",
            margin: 0, // margin is in pixels
            dropShadow: {
              enabled: true,
              top: -3,
              left: 0,
              blur: 4,
              opacity: 0.35
            }
          },

          dataLabels: {
            showOn: "always",
            name: {
              offsetY: -20,
              show: true,
              color: "#888",
              fontSize: "13px"
            },
            value: {
              formatter: function (val) {
                return val;
              },
              color: "#111",
              fontSize: "30px",
              show: true
            }
          }
        }
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "horizontal",
          shadeIntensity: 0.5,
          gradientToColors: ["#ABE5A1"],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: "round"
      },
      labels: ["Percent"]
    },
    seriesRadial: [76],
    optionsBar: {
      chart: {
        stacked: true,
        stackType: "100%",
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: true
        }
      },
      dataLabels: {
        dropShadow: {
          enabled: true
        }
      },
      stroke: {
        width: 0
      },
      xaxis: {
        categories: ["Fav Color"],
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        }
      },
      fill: {
        opacity: 1,
        type: "gradient",
        gradient: {
          shade: "dark",
          type: "vertical",
          shadeIntensity: 0.35,
          gradientToColors: undefined,
          inverseColors: false,
          opacityFrom: 0.85,
          opacityTo: 0.85,
          stops: [90, 0, 100]
        }
      },

      legend: {
        position: "bottom",
        horizontalAlign: "right"
      }
    },
    seriesBar: [
      {
        name: "blue",
        data: [32]
      },
      {
        name: "green",
        data: [41]
      },
      {
        name: "yellow",
        data: [12]
      },
      {
        name: "red",
        data: [65]
      }
    ]
  }

  return (
    <div className="app">
      <div className="row">
        <div className="col mixed-chart">
          <Chart
            options={state.optionsMixedChart}
            series={state.seriesMixedChart}
            type="line"
            width="1000"
          />
        </div>

        {/* <div className="col radial-chart">
          <Chart
            options={state.optionsRadial}
            series={state.seriesRadial}
            type="radialBar"
            width="280"
          />
        </div>
      </div>

      <div className="row">
        <div className="col percentage-chart">
          <Chart
            options={state.optionsBar}
            height={140}
            series={state.seriesBar}
            type="bar"
            width={500}
          />
        </div> */}

      </div>
    </div>
  );
}


export default Histogram;
