import React, { Component } from 'react';
import Chart from 'react-apexcharts'

export default class Graph extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          id: 'temperature-data',
          width: '100%',
          foreColor: '#b9bdd1',
          fontFamily: 'Open Sans, sans-serif',
          animations: {
            enabled: true,
            easing: 'easeinout',
            speed: 800,
            animateGradually: {
                enabled: true,
                delay: 450
            },
            dynamicAnimation: {
                enabled: true,
                speed: 350
            }
          },
        },
          // X - LINE
        xaxis: {
          // type: "datetime", -- live data
          categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          labels: {
            minHeight: 0,
            style: {
              colors: ['#b9bdd1'],
              fontSize: '16px',
            },
          },
          title: {
            text: 'Days',
            rotate: 90,
            offsetX: 0,
            offsetY: 0,
            style: {
              color: '#b9bdd1',
              fontSize: '20px',
            },
          },
          tooltip: {
            enabled: false,
          },
        },
          // Y - LINE
        yaxis: {
          labels: {
            minWidth: 0,
            style: {
              colors: ['#b9bdd1'],
              fontSize: '16px',
            },
          },
          title: {
            text: 'hPa',
            rotate: 90,
            offsetX: 0,
            offsetY: 0,
            style: {
              color: '#b9bdd1',
              fontSize: '20px',
            },
          },
        },
          // NUMBERS ABOVE STROKE
        dataLabels: {
          enabled: false,
          style: {
            fontSize: '18px',
            colors: ['#fd797a']
          },
        },
          // STROKE OPTION
        stroke: {
          show: true,
          curve: 'straight',
          lineCap: 'round',
          colors: ['#fd797a'],
          width: 2,
          dashArray: 2,
        },
          // MARKERS ON THE GRAPH
        markers: {
          size: 8,
          strokeWidth: 6,
          strokeColor: '#222835',
          fillOpacity: 0,
          strokeOpacity: 3,
          colors: ['#fd797a'],
          hover: {
            size: 12
          }
        },
          // GRADIENT OPTIONS
        fill: {
          colors: ['#fd797a'],
          type: 'gradient',
          gradient: {
              type: "vertical",
              shadeIntensity: 1,
              gradientToColors: ['#fd797a'],
              inverseColors: false,
              opacityFrom: 0.6,
              opacityTo: 0.0,
          },
        },
          // GRID OPTIONS
        grid: {
          position: 'back',
          borderColor: '#565b75',
          xaxis: {
            lines: {
              show: false,
            }
          },
          yaxis: {
            lines: {
              show: true,
            }
          },
        },
          // TOOLTIP OPTION
        tooltip: {
          enabled: true,
          shared: true,
          followCursor: false,
          intersect: false,
          inverseOrder: false,
          custom: undefined,
          fillSeriesColor: false,
          theme: true,
          style: {
            fontSize: '12px',
            fontFamily: undefined
          },
          onDatasetHover: {
              highlightDataSeries: false,
          },
          
          marker: {
              show: true,
          },
        },
          // LEGEND 
        legend: {
          show: false,
        }     
      },
        // Y - LINE
      series: [{
        data: [9542.1, 4521.2, 5689.2, 5214.2, 7598.1, 6487.3]
      }],
      responsive: [{
        breakpoint: 1000,
        options: {
        },
      }],
    
    }
  }

  // update = () => {
  //   const newSeries = []

  //   console.log(this.state.series);
    
  //   const updateValue = this.state.series[0].data.map(() => {
  //     return Math.floor(Math.random() * 10000)
  //   })
  //   newSeries.push(updateValue)
    
  //   console.log(newSeries);
  //   this.setState({
  //     data: newSeries,
  //   })
  // }
  
  
    
  

  

  
  render() {
    // console.log(this.update());
    return (
      <Chart 
        options={this.state.options} 
        series={this.state.series}
        responsive={this.state.responsive}
        type="area"
        height={400}
         />
    )
  }

}