import React from 'react';
import StagePosts from '../StagePosts'
import {randMinutes} from '../../services/calculations.js'
import './stylesheet.css'

function Best(props){
  const bestTime = props.bestTime;
  let minutes = randMinutes();

  if(minutes < 10){
    minutes = `0${minutes}`;
  }
  if(bestTime[0] > 12){
    bestTime[0] = parseInt(bestTime[0]) - 12;
    bestTime[0] = bestTime[0].toString() + ':' + minutes + ' pm';
  }else{
    bestTime[0] = bestTime[0] + ':' + minutes + ' am';
  }
  // console.log(bestTime[0]);
  const best = bestTime[1] ? bestTime[1].average : null ;

  return(
    <div className='best-time'>
      <h4 className='time-child'>We think the best time to post is </h4>
      <h1 className='time'>{bestTime[0]}</h1>
      <h4 className='time-child'>Average karma for this time is {best}</h4>
      {props.state.loggedIn && !bestTime[0].includes('undefined')?<StagePosts currentSub={props.state.currentSub}
                                                                              bestTime={bestTime}

      /> : null}
    </div>
  )
}

export default Best;
