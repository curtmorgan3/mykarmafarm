import React, { Component } from 'react';
import ViewController from './Components/ViewController';
import Login from './Components/Login'
import {getPosts, login} from './services/api-helpers.js'
import {calculateAverage, findBestTime} from './services/calculations.js'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      currentView: '',
      currentSearch: '',
      currentSub: '',
      posts: [],
      average: [],
      bestTime: [],
      loggedIn: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  async componentDidMount(){
    console.log('did mount');
    await login();
  }
  //***********View Controllers************
  setView(view){
    this.setState({
      currentView: view
    })
  }

  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  async handleSubmit(evt){
    evt.preventDefault();
    await this.setState({
      currentView: 'viewSub',
      currentSub: this.state.currentSearch,
      currentSearch: ''
    })
    const posts = await getPosts(this.state.currentSub);
    await this.setState({
      posts: posts
    })
    const average = await calculateAverage(this.state.posts);
    await this.setState({
      average: average
    })
    const bestTime = await findBestTime(this.state.average);
    await this.setState({
      bestTime: bestTime
    })

  }
//******************************************

  handleLogin(){
    this.setState({
      loggedIn: true
    })

  }

  render() {
    return (
      <div className="App">
        <button onClick={()=>this.setView('search')}>Search A Subreddit</button>
        <button onClick={()=>this.setView('viewSub')}>View A Subreddit</button>
        <Login handleLogin={this.handleLogin}/>

        <ViewController state={this.state}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
        />
      </div>
    );
  }
}

export default App;
