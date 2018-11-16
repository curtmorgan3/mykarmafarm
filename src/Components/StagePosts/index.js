import React from 'react';
import {newPost} from '../../services/api-helpers.js'


class StagePosts extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sr: '',
      title: '',
      text: '',
      url: '',
      video_url: '',
      kind: '',
      repost: false,
      nsfw: false,
      spoiler: false,
      flair_id: '',
      flair_text: '',
      stagedPosts: {},
      bestTime: ''
    }
    //bindings
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount(){
    this.setState((state, props) => ({
    bestTime: props.bestTime,
    sr: props.currentSub
  }));

  }
  componentWillReceiveProps(newProps){
    this.setState({
      bestTime: newProps.bestTime,
      sr: newProps.currentSub
    })
  }
  async handleSubmit(evt){
    evt.preventDefault();
    const data = {
      sr: this.state.sr,
      bestTime: this.state.bestTime,
      title: this.state.title,
      text: this.state.text,
      url: this.state.url,
      video_url: this.state.video_url,
      kind: this.state.kind,
      resubmit: Boolean(parseInt(this.state.repost)),
      nsfw: Boolean(parseInt(this.state.nsfw)),
      spoiler: Boolean(parseInt(this.state.spoiler)),
      flair_id: this.state.flair_id,
      flair_text: this.state.flair_text,
      api_type: 'json',
      extension: 'json'

    }

    const post = await newPost(data, this.state.bestTime);
    this.setState({
      stagedPosts: data
    })

    this.props.handleStagedPosts(this.state.stagedPosts)
    this.props.setView('posts')
  }

  handleChange(evt){
    this.setState({
      [evt.target.name]: evt.target.value
    })

  }

  render(){
    return(
      <div className = 'newpost-form'>
        <form onSubmit={this.handleSubmit}>
          <input type='text'value={this.state.title} name='title' placeholder ='Title' onChange={this.handleChange}/>
          <input type='text'value={this.state.text} name='text' placeholder = 'Body' onChange={this.handleChange}/>
          <input type='text'value={this.state.url} name='url' placeholder ='Link/Image URL' onChange={this.handleChange}/>
          <input type='text'value={this.state.video_url} name='video_url' placeholder ='Video URL' onChange={this.handleChange}/>
          <input type='text'value={this.state.kind} name='kind' placeholder ='Type' onChange={this.handleChange}/>
          <input type='text'value={this.state.flair_id}  name='flair_id' placeholder ='Flair Type' onChange={this.handleChange}/>
          <input type='text'value={this.state.flair_name} name='flair_text' placeholder ='Flair Text' onChange={this.handleChange}/>
          <label><input type='checkbox' value={this.state.repost==='true'? 0:1} name='repost' onChange={this.handleChange}/>Repost</label>
          <label><input type='checkbox' value={this.state.nsfw==='true'? 0:1} name='nsfw' onChange={this.handleChange}/>NSFW</label>
          <label><input type='checkbox' value= {this.state.spoiler==='true'? 0:1}name='spoiler' onChange={this.handleChange}/>Spoiler</label>
          <input type='submit' value='Submit' />
        </form>


      </div>
    )
  }
}

export default StagePosts;
