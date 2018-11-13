import React from 'react';

function ViewSub(props){
  const currentSub = props.state.currentSub;
  const posts = props.state.posts;
  return(
    <div>
      <h1>{currentSub}</h1>
      {posts.map(post => {
        return(
          <div className = 'post'>
            <a href={'https://www.reddit.com'+post.data.permalink}>{post.data.title}</a>
            <p>{post.data.created_utc}</p>
            <p>{post.data.score}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ViewSub;
