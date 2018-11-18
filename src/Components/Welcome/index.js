import React from 'react';
import './stylesheet.css';

function Welcome(props){


  return(
    <div className='welcome-view'>
      <div className='welcome-splash'>
        <img id='kf-web-logo' src={require("../../images/kf_web_logo.JPG")} alt={"Karma Farm"}/>
      </div>
      <div className='welcome-nav'>
        <button onClick={()=>props.setView('search')}>Search A Subreddit</button>
        <button onClick={()=>props.handleLogin()}>Login with Reddit</button>
      </div>
    </div>
  )
}

export default Welcome;
