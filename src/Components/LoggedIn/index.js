import React from 'react';
import Search from '../Search'

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
      <button>Stage Posts</button>
    </div>
  )
}

export default LoggedIn;
