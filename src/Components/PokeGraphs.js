import React from 'react'
//import { HorizontalBar  } from 'react-chartjs-2'
import { Bar, HorizontalBar } from 'react-chartjs-2';

const PokeGraphs = (props) => {

  const { hp, attack, defense, specialAtt, specialDef, speed } = props.pokemon;
  console.log('This is from pokegraphs: ' + attack)
  return (
    <div>
      <Bar
        type={'horizontalBar'}
        data={{
          labels: ['HP', 'Attack', "Defense", "Special Attack", "Special Defense", "Speed"],
          datasets: [{
            data: [hp, attack, defense, specialAtt, specialDef, speed],
            backgroundColor: "rgba(63,103,126,1)"
          },
          {
            data: [21, 21, 21, 21, 21, 21],
            backgroundColor: "rgba(163,103,126,1)"
          },
          {
            data: [31, 31, 31, 31, 31, 31],
            backgroundColor: "rgba(63,203,226,1)"
          },
          ]
        }
        }
        // options={{
        //   indexAxis: 'y',
        //   scales: {
        //     xAxes: [{
        //       stacked: true
        //     }],
        //     yAxes: [{
        //       stacked: true
        //     }]
        //   }
        // }}
      />
    </div>
  )
}

export default PokeGraphs
