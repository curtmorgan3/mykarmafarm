import React from 'react';
import Search from '../Search'
import ViewSub from '../ViewSub'
import Welcome from '../Welcome'
import LoggedIn from '../LoggedIn'
import Posts from '../Posts'

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
                    handleStagedPosts={props.handleStagedPosts}
            />;
    case 'loggedIn':
    return <LoggedIn state={props.state}
                     setView={props.setView}
                     handleChange={props.handleChange}
                     handleSubmit={props.handleSubmit}
            />
    case 'posts':
    return <Posts state={props.state}
                  setView={props.setView}
                  deleteStagedPost={props.deleteStagedPost}
            />
    default:
    return <Welcome setView={props.setView}
                    handleLogin={props.handleLogin}
           />

  }
}

export default ViewController;
