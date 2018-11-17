import React from 'react';
import Search from '../Search'
import StagePosts from '../StagePosts'
import './stylesheet.css'

function LoggedIn(props){
  const userName = props.state.currentUserName

  return(
    <div className='loggedin-view'>
      <Search state={props.state}
              handleChange={props.handleChange}
              handleSubmit={props.handleSubmit}
              setView={props.setView}
      />
      <h1>Hello, {userName}!</h1>
    </div>
  )
}

export default LoggedIn;
