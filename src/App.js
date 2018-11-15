import React, { Component } from 'react';
import ViewController from './Components/ViewController';
import {getPosts, authorize, getUserData, loggedIn, login} from './services/api-helpers.js'
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
      loggedIn: false,
      userAccessToken: '',
      currentUserName: ''
    }
    //bindings
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.setView = this.setView.bind(this);
  }

  async componentDidMount(){
    const code = await loggedIn();
    if(code){
      this.setState({
        loggedIn: true,
        currentView: 'loggedIn'
      })
      const userAuth = await authorize(code);
      await this.setState({
        userAccessToken: userAuth.data.access_token
      })
      const currentUser = await getUserData(this.state.userAccessToken)
      this.setState({
        currentUserName: currentUser.data.name,
        currentUser: currentUser.data
      })

    }else{
      this.setState({
        loggedIn: false
      })
    }

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

  async handleLogin(){
    
    await login();
  }

  render() {
    return (
      <div className="App">

        <ViewController state={this.state}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        handleLogin={this.handleLogin}
                        setView={this.setView}
        />
      </div>
    );
  }
}

export default App;
