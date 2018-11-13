import React, { Component } from 'react';
import ViewController from './Components/ViewController'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentView: ''
    }
  }

  setView(view){
    this.setState({
      currentView: view
    })
  }


  render() {
    return (
      <div className="App">
        <button onClick={()=>this.setView('search')}>Search A Subreddit</button>
        <button onClick={()=>this.setView('viewSub')}>View A Subreddit</button>

        <ViewController state={this.state} />
      </div>
    );
  }
}

export default App;
