import React from 'react'
import './stylesheet.css'

function Graph(props){
  const average = props.average.sort();
  const hoursX = [];
  const karmaY = [];
  average.map(hour=>{
    hoursX.push(hour[0]);
    karmaY.push(hour[1].average)
  })
  console.log('hours: '+hoursX);
  console.log('karma: '+karmaY);
return(
  <div className='graph'>
    {average.map(hour => {
      return(
        <p key={hour[0]}>{hour[0]}: {hour[1].average}</p>
      )
    })}
  </div>
)
}

export default Graph;
