import React from 'react'
//import { HorizontalBar  } from 'react-chartjs-2'
import {Bar, HorizontalBar} from 'react-chartjs-2';

const PokeGraphs = (props) => {
  
  const {hp, attack, defense, specialAtt, specialDef, speed} = props.pokemon;
  console.log('This is from pokegraphs: '+ attack)
  return (
    <div>
      <Bar
      type={'horizontalBar'}
        data={{
          labels: ['HP', 'Attack', "Defense", "Special Attack", "Special Defense", "Speed"],
          datasets: [{
            data: [hp, attack, defense, specialAtt, specialDef, speed]
          }]
        }
        }
        options={{indexAxis: 'y'}}
      />
    </div>
  )
}

export default PokeGraphs
