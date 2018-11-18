import React from 'react'
import './stylesheet.css'

export function Error(props){
  const currentSearch = props.state.currentSub
  return(
    <div className='error-view'>
      <img src={require('../../images/reddit_404.png')} alt='404'/>
      <h1>Can't find r/{currentSearch}!</h1>
      <button onClick={()=>props.setView('search')}>Back</button>
    </div>
  )
}
