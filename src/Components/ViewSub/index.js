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
  console.log(props.state.bestTime);

  return(
    <div className='viewSub-view'>
    {loggedIn ? <button className='back-button' onClick={()=> props.setView('loggedIn')}>Back</button>
              : <button className='back-button' onClick={()=>props.setView('search')}>Back</button>
    }
      <h1 className='subReddit'>r/{currentSub}</h1>

      <div className='chart'>
        <Graph average={props.state.average}/>
      </div>
      <h1 className='average-karma-header'></h1>
      <div className = 'best-time'>
        <Best bestTime={props.state.bestTime}
              state={props.state}
              handleStagedPosts={props.handleStagedPosts}
              setView={props.setView}
        />
      </div>
      {props.state.bestTime[1] ? <h3 className='average-karma-header'
                                 >Average karma for this time is {props.state.bestTime[1].average}
                                 </h3>
                               : null}
      <h3 className='top-100-header'>Top 100 Posts this Week</h3>
      <div className='top-100' >
        {posts.map(post => {
        const date = moment.unix(post.data.created_utc).format('MMMM Do YYYY');
        const hour = moment.unix(post.data.created_utc).format('hh:mm:ss a');
        return(
          <div className = 'post'
               key={post.data.name}
          >
            <a className='title'href={'https://www.reddit.com'+post.data.permalink}>{post.data.title}</a>
            <p>Posted: {date}, {hour} Karma: {post.data.score}</p>
            {post.data.thumbnail && post.data.thumbnail !== 'self'
                  ? <img src={post.data.thumbnail} alt='Post Thumbnail'/>
                  : null}
          </div>
        )
      })}
      </div>


    </div>
  )
}

export default ViewSub;
