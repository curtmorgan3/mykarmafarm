import React from 'react';
import Search from '../Search'
import ViewSub from '../ViewSub'
import Welcome from '../Welcome'
import LoggedIn from '../LoggedIn'

function ViewController(props){
  const currentView = props.state.currentView;
  switch(currentView){
    case 'search':
    return <Search state={props.state}
                   handleChange={props.handleChange}
                   handleSubmit={props.handleSubmit}
                   setView={props.setView}
            />;
    case 'viewSub':
    return <ViewSub state={props.state}
                    setView={props.setView}
            />;
    case 'loggedIn':
    return <LoggedIn state={props.state}
                     setView={props.setView}
                     handleChange={props.handleChange}
                     handleSubmit={props.handleSubmit}
            />
    default:
    return <Welcome setView={props.setView}
                    handleLogin={props.handleLogin}
           />

  }
}

export default ViewController;
