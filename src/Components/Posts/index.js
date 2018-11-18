import React from 'react'
import './stylesheet.css'

function Post(props){
  let stagedPosts = props.state.stagedPosts;

  return(
    <div className='post-view'>
      <button onClick={()=>props.setView('search')}>Back</button>
      <h1 className='your-karma-farm'>My Karma Farm</h1>
      <img src={require('../../images/kf_app_logo.JPG')} alt={'Karma Farmer'} />
      <div className='staged-posts'>
        {stagedPosts.map(post => (
          <div className='posts'>
            <h3>{post.title}</h3>
            <p>r/{post.sr}</p>
            <p>Will Post: {post.bestTime}</p>
            <button onClick={()=>props.deleteStagedPost(post.title)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Post;
