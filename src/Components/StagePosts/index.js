import React from 'react';
import {newPost, makePost} from '../../services/api-helpers.js'
import './stylesheet.css'


class StagePosts extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      sr: '',
      title: '',
      text: '',
      url: '',
      video_url: '',
      kind: 'self',
      repost: false,
      nsfw: false,
      spoiler: false,
      postNow: false,
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

    if( (Boolean(parseInt(this.state.postNow))) ){
      const postNow = await makePost(data);
      this.props.setView('search')
    }else{
      const postLater = await newPost(data, this.state.bestTime);
      this.setState({
        stagedPosts: data
      })
      this.props.handleStagedPosts(this.state.stagedPosts)
      this.props.setView('posts')
    }

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
          <input type='text'value={this.state.title} name='title'
                 placeholder ='Title *Required*' onChange={this.handleChange}
                 className='title'/>
          <span><br/>
          <label><input type='checkbox' value={this.state.repost==='1'? 0:1}
                        name='repost' onChange={this.handleChange}/>Repost</label>
          <label><input type='checkbox' value={this.state.nsfw==='1'? 0:1}
                        name='nsfw' onChange={this.handleChange}/>NSFW</label>
          <label><input type='checkbox' value= {this.state.spoiler==='1'? 0:1}
                        name='spoiler' onChange={this.handleChange}/>Spoiler</label>
          <label><input type='checkbox' value= {this.state.postNow==='1'? 0:1}
                        name='postNow' onChange={this.handleChange}/>Post Now?</label>
          </span><br/>
          <span>
          <p>If Post Now isn't checked, Karma Farm will post at the opportune time for you.</p>
          <p>When submitting a link that's been posted here before, be sure to select Repost.</p>
          <textarea value={this.state.text} name='text'
                 placeholder = 'Body' onChange={this.handleChange}
                 className='body'/>
          </span><br/>
          <span>
          <input type='text'value={this.state.url} name='url'
                 placeholder ='Link/Image URL' onChange={this.handleChange}
                 className='url'/>
          </span><br/>
          <span>
          <input type='text'value={this.state.video_url} name='video_url'
                 placeholder ='Video URL' onChange={this.handleChange}
                 className='video-url'/>
          </span><br/>
          <span>
          <input type='text'value={this.state.kind} name='kind'
                 placeholder ="If posting a link, put 'link'."
                 onChange={this.handleChange}
                 className='kind'/>
          <input type='text'value={this.state.flair_id}  name='flair_id'
                 placeholder ='Flair Type' onChange={this.handleChange}
                 className='flair-id'/>
          <input type='text'value={this.state.flair_name} name='flair_text'
                 placeholder ='Flair Text' onChange={this.handleChange}
                 className='flair-text'/>
          </span><br/>
          <p>If submitting a link, put 'link', otherwise leave 'self'</p>
          <input type='submit' value='Submit' />
        </form>


      </div>
    )
  }
}

export default StagePosts;
