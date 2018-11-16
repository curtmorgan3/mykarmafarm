import React from 'react';
import Graph from '../Graph';
import Best from '../Best';
import StagePosts from '../StagePosts'
import moment from 'moment';
import './stylesheet.css'

function ViewSub(props){
  const currentSub = props.state.currentSub;
  const posts = props.state.posts;
  const loggedIn = props.state.loggedIn;


  return(
    <div className='viewSub-view'>
    {loggedIn ? <button className='back-button' onClick={()=> props.setView('loggedIn')}>Back</button>
              : <button className='back-button' onClick={()=>props.setView('search')}>Back</button>
    }
      <h1 className='subReddit'>r/{currentSub}</h1>
      <div className = 'best-time'>
        <Best bestTime={props.state.bestTime}
              state={props.state}
              handleStagedPosts={props.handleStagedPosts}
              setView={props.setView}
        />
      </div>

      <div className='chart'>
        <Graph average={props.state.average}/>
      </div>

      <div className='top-100' >
        <h3>Top 100 Posts this Week</h3>
        {posts.map(post => {
        const date = moment.unix(post.data.created_utc).format('MMMM Do YYYY');
        const hour = moment.unix(post.data.created_utc).format('hh:mm:ss a');
        return(
          <div className = 'post'
               key={post.data.name}
          >
            <a href={'https://www.reddit.com'+post.data.permalink}>{post.data.title} </a>{'\n'}
            <p>Posted At: {date}, {hour} </p>
            <p>Karma: {post.data.score}</p>
          </div>
        )
      })}
      </div>


    </div>
  )
}

export default ViewSub;
