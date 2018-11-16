import React from 'react';
import './stylesheet.css';

function Welcome(props){


  return(
    <div className='welcome-view'>
      <div className='welcome-splash'>
        <img src={require("../../images/snoo.jpg")} alt={"Snoo"}/>
        <h1>Karma Farm</h1>
      </div>
      <div className='welcome-nav'>
        <button onClick={()=>props.setView('search')}>Search A Subreddit</button>
        <button onClick={()=>props.handleLogin()}>Login with Reddit</button>
      </div>
    </div>
  )
}

export default Welcome;
