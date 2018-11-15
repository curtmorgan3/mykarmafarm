import React from 'react';
import Search from '../Search'
import StagePosts from '../StagePosts'

function LoggedIn(props){
  const userName = props.state.currentUserName

  return(
    <div>
      <h1>Hello, {userName}!</h1>
      <Search state={props.state}
              handleChange={props.handleChange}
              handleSubmit={props.handleSubmit}
              setView={props.setView}
      />
      <StagePosts />
    </div>
  )
}

export default LoggedIn;
