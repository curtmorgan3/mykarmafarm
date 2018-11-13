import React from 'react';
import moment from 'moment'

function ViewSub(props){
  const currentSub = props.state.currentSub;
  const posts = props.state.posts;
  return(
    <div>
      <h1>{currentSub}</h1>
      {posts.map(post => {
        const time = moment.unix(post.data.created_utc).format('MMMM Do YYYY, h:mm:ss a');
        return(
          <div className = 'post'
               key={post.data.name}
          >
            <a href={'https://www.reddit.com'+post.data.permalink}>{post.data.title}</a>
            <p>Posted At: {time}</p>
            <p>Karma: {post.data.score}</p>
          </div>
        )
      })}
    </div>
  )
}

export default ViewSub;
