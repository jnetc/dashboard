import React from 'react'
import { Line } from 'react-chartjs-2'



export default class Graph extends React.Component {

  state = {
    data: {
      labels: ['1', '2', '3', '4', '5', '6', '7'],
      datasets: [
        {
          label: 'Video mades',
          // backgroundColor: 'rgba(253, 121, 122, 0.8)',
          data: ['11', '42', '32', '47', '26', '12', '36'],
        }
      ]
    }
  }

  setGradientColor = (canvas, color) => {
    const ctx = canvas.getContext('2d')
    const gradient = ctx.createLinearGradient(0, 75, 0, 400)
    gradient.addColorStop(0, color)
    gradient.addColorStop(0.95, 'rgba(116, 103, 220, 0)')
    return gradient
  }
  getCharData = canvas => {
    const data = this.state.data
    if (data.datasets) {
      let colors = ['rgba(253, 121, 122, 0.3)']
      data.datasets.forEach((set, i) => {
          // OPTIONS
          // https://www.chartjs.org/docs/latest/charts/line.html
        set.backgroundColor = this.setGradientColor(canvas, colors[i])
        set.borderColor = 'rgba(253, 121, 122, 1)'
        set.borderWidth = 1
        
        set.lineTension = 0
        set.pointBackgroundColor = 'rgba(185, 189, 209, 1)'
        set.pointHoverBackgroundColor = 'rgba(253, 121, 122, 0.8)'
        set.pointBorderColor = 'rgb(34, 40, 53)'
        set.pointBorderWidth = 5
        set.pointHoverBorderWidth = 4
        set.pointRadius = 6
        set.pointHoverRadius = 7
      })
    }
    return data
  }
  // chartReference = {};
 
  // componentDidMount() {
  //   console.log(this.chartReference); // returns a Chart.js instance reference
  // }
  


  render() {
    return (
      <section className="graph__style__box">
        <h4>Chart Sample</h4>
        <Line 
          option={{ 
            // responsive: true,
            maintainAspectRatio: false,
          }}
          data={ this.getCharData }
        />
      </section>
    )
  }
}