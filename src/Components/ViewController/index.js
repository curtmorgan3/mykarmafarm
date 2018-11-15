import React from 'react';
import Search from '../Search'
import ViewSub from '../ViewSub'
import Welcome from '../Welcome'
import LoggedIn from '../LoggedIn'

function ViewController(props){
  const loggedIn = props.state.loggedIn
  const currentView = props.state.currentView;
  switch(currentView){
    case 'search':
    return <Search state={props.state}
                   handleChange={props.handleChange}
                   handleSubmit={props.handleSubmit}
            />;
    case 'viewSub':
    return <ViewSub state={props.state}/>;
    default:
      if(loggedIn === false){
        return <Welcome />
      }else{
        return <LoggedIn />
      }

  }
}

export default ViewController;
