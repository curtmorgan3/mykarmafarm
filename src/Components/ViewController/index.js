import React from 'react';
import Search from '../Search'
import ViewSub from '../ViewSub'
import Welcome from '../Welcome'

function ViewController(props){
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
    return <Welcome />
  }
}

export default ViewController;
