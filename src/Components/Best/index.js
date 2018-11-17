import React from 'react';
import StagePosts from '../StagePosts'
import {randMinutes} from '../../services/calculations.js'
import './stylesheet.css'

function Best(props){
  const bestTime = props.bestTime; //{'10', {ctr:0,karma:0,average:0}}
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
  const avgKarma = bestTime[1] ? bestTime[1].average : null ;

  return(
    <div className='best-time'>
      <h1 className='time'>{bestTime[0]}</h1>
      {props.state.loggedIn && !bestTime[0].includes('undefined')?<StagePosts currentSub={props.state.currentSub}
                                                                              bestTime={bestTime[0]}
                                                                              handleStagedPosts={props.handleStagedPosts}
                                                                              setView={props.setView}
      /> : null}
    </div>
  )
}

export default Best;
