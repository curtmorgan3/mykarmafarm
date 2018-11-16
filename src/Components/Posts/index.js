import React from 'react'

function Post(props){
  let stagedPosts = props.state.stagedPosts;

  return(
    <div>
      <button onClick={()=>props.setView('search')}>Back</button>
      {stagedPosts.map(post => (
        <h1>{post.title}, {post.sr}, {post.bestTime}</h1>
      ))}
    </div>
  )
}

export default Post;
