import React from 'react'
import Chartist from 'chartist'
import ChartistGraph from 'react-chartist'
import "../../../node_modules/chartist/dist/chartist.min.css"
import './stylesheet.css'

function Graph(props){
  const average = props.average.sort();
  const hoursX = [];
  const karmaY = [];

  let data = {labels:[], series:[]}
  let options = {width: 800, height: 400};
  let type = 'Bar'

  average.map(hour=>{
    hoursX.push(hour[0]);
    karmaY.push(hour[1].average)
  })
  hoursX.map(x=>{
    data.labels.push(x);
  })
  data.series.push(karmaY)

  return(
    <div>
    <ChartistGraph data={data} options={options} type={type} />
    </div>
  )
}

export default Graph;
