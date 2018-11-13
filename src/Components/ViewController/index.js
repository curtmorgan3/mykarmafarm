import React from 'react';
import Search from '../Search'
import ViewSub from '../ViewSub'

function ViewController(props){
  const currentView = props.state.currentView;
  switch(currentView){
    case 'search':
    return <Search />;
    case 'viewSub':
    return <ViewSub />;
    default:
    return <h1>Welcome</h1>
  }
}

export default ViewController;
