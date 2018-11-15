import React from 'react';

function Welcome(props){


  return(
    <div>
      <h1>Welcome</h1>
      <button onClick={()=>props.setView('search')}>Search A Subreddit</button>
      <button onClick={()=>props.handleLogin()}>Login with Reddit</button>
    </div>
  )
}

export default Welcome;
