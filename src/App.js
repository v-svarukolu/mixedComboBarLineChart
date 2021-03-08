import React from 'react'
import { Bar } from 'react-chartjs-2'
import datalabels from 'chartjs-plugin-datalabels';
//const rand = () => Math.round(Math.random() * 20 - 10)

const data = {
  labels: ['Week 3', 'Week 4', 'Week 5', 'Week 6'],
  datasets: [
    {
      type: 'line',
      label: '# of Tickets created',
      borderColor: 'rgb(54, 162, 235)',
      borderWidth: 3,
      pointBackgroundColor: "rgb(54, 162, 235)",
      borderJoinStyle: "round",
      lineTension: 0.3,
      radius: 4,
      pointStyle: "circle",
      fill: false,
      data: [6, 9, 12, 16],
    },
    {
      type: 'bar',
      label: '# of tickets with Excellent content',
      backgroundColor: '#ff531a',
      data: [1, 1, 2, 3, 2, 3, 5],
      borderColor: 'white',
      borderWidth: 1,
    },
    {
      type: 'bar',
      label: 'Refile Wrong product',
      backgroundColor: '#adad85',
      data: [0, 3, 1, 2, 0, 1, 4],
    },
    {
      type: 'bar',
      label: '# of ticket with missing info',
      backgroundColor: '#ffcc00',
      data: [1, 3, 5, 2, 3, 4, 8],
    },
  ],
}

const options = {
  //maintainAspectRatio: false,
  responsive: true,
  //aspectRatio: 1,
  title: {
    display: true,
    text: "Escalation Quality",
    fontSize: 24,
    fontStyle: 'bold',
  },
  legend: {
    //display:false,
    position: 'bottom',
    labels: {
      //usePointStyle: true,
      //fontColor: "white"
    }
  },
  scales: {
    pointLabels: {
      fontStyle: "bold",
    },
    xAxes: [{
      // stacked: true,
      ticks: {
        fontSize: 24,
        padding: 0,
        stepSize: 1,
        max: 90,
        // fontStyle: 'bold',
        // fontColor: 'black',
      },
      gridLines: {
        display: false
      },
      barPercentage: 0.8
    }],
    yAxes: [
      {//stacked: true,
        //categoryPercentage: 1.0,
        //barPercentage: 0.85,
        ticks: {
          beginAtZero: true,
        },
        // gridLines: {
        //   lineWidth: 15,
        //   color: "rgba(255,255,255,0)"
        // },
      },
    ],
  },
  layout: {
    padding: {
      left: 30,
      right: 0,
      top: 0,
      bottom: 0
    }
  },
  plugins: {
    datalabels: {
      display: true,
      color: 'black',
      align: 'end',
      formatter: function (value, context) {
        return context.dataset.type == "bar" ? value + '%' : value;
      },
      anchor: 'end'
    }
  }
}

const App = () => (

  <div className='header'>
    <h1 className='title'></h1>
    <Bar data={data} options={options} />
  </div>
)

export default App